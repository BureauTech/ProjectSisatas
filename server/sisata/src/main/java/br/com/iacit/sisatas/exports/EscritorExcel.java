package br.com.iacit.sisatas.exports;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import br.com.iacit.sisatas.models.AssuntosModel;
import br.com.iacit.sisatas.models.RevisoesModel;
import br.com.iacit.sisatas.models.UsuariosModel;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.*;
import br.com.iacit.sisatas.models.AtasModel;

import javax.imageio.ImageIO;

public class EscritorExcel {

	private final AtasModel ata;
	private final List<RevisoesModel> revisoes;
	private final XSSFWorkbook workbook;
	private final XSSFSheet sheet;
	private int rownum;
	
	public EscritorExcel(AtasModel ata, List<RevisoesModel> revisoes) throws IOException, URISyntaxException {
		this.ata = ata;
		this.revisoes = revisoes;

		String templatePath = "templates/template.xlsx";
		ClassLoader classLoader = getClass().getClassLoader();
        URL resource = classLoader.getResource(templatePath);
		assert resource != null;
		File file = new File(resource.toURI());
		FileInputStream fileInput = new FileInputStream(file);
		
		this.workbook = new XSSFWorkbook(fileInput);
		this.sheet = workbook.getSheetAt(0);
	}

	private static BufferedImage resizeImage(BufferedImage originalImage) {
		Image resultingImage = originalImage.getScaledInstance(190, 90, Image.SCALE_DEFAULT);
		BufferedImage outputImage = new BufferedImage(190, 90, BufferedImage.TYPE_INT_ARGB);
		outputImage.getGraphics().drawImage(resultingImage, 0, 0, null);
		return outputImage;
	}

	private static BufferedImage createImageFromBytes(byte[] imageData) {
		ByteArrayInputStream bais = new ByteArrayInputStream(imageData);
		try {
			return ImageIO.read(bais);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	private static byte[] toByteArray(BufferedImage bi) throws IOException {
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		ImageIO.write(bi, "PNG", baos);
		return baos.toByteArray();
	}
	
	private void writeCabecalho() {
		DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		DateTimeFormatter timeFormat = DateTimeFormatter.ofPattern("hh:mm");

		Cell numero = sheet.getRow(1).getCell(1);
		numero.setCellValue("ATA Nº.: " + ata.getAtaId());

		Cell data = sheet.getRow(1).getCell(3);
		data.setCellValue("DATA: " + ata.getAtaDataInicio().format(dateFormat) + " - " + ata.getAtaDataFim().format(dateFormat));

		Cell horaInicio = sheet.getRow(2).getCell(3);
		horaInicio.setCellValue("INÍCIO: " + ata.getAtaHoraInicio().format(timeFormat));

		Cell horaFim = sheet.getRow(2).getCell(4);
		horaFim.setCellValue("FIM: " + ata.getAtaHoraFim().format(timeFormat));

		Cell local = sheet.getRow(3).getCell(3);
		local.setCellValue("LOCAL: " + ata.getAtaLocal());
		
		Cell nomeProjeto = sheet.getRow(7).getCell(1);
		nomeProjeto.setCellValue("Projeto: " + ata.getAtaProjeto());
	}
	
	private void writeParticipantes() {
		rownum = 9;

		for (UsuariosModel participante : ata.getParticipaAtas()) {
			XSSFCellStyle borderLeft = workbook.createCellStyle();
			borderLeft.setBorderLeft(BorderStyle.THIN);

			XSSFCellStyle borderRight = workbook.createCellStyle();
			borderRight.setBorderRight(BorderStyle.THIN);

			Cell nomeParticipante = sheet.getRow(rownum).getCell(1);
			nomeParticipante.setCellValue(participante.getUsuNome());
			nomeParticipante.setCellStyle(borderLeft);

			Cell areaParticipante = sheet.getRow(rownum).getCell(3);
			areaParticipante.setCellValue(participante.getUsuAreaEmpresa());

			Cell emailParticipante = sheet.getRow(rownum).getCell(4);
			emailParticipante.setCellValue(participante.getUsuEmail());

			Cell telefoneParticipante = sheet.getRow(rownum++).getCell(5);
			telefoneParticipante.setCellValue(participante.getUsuTelefone());
			telefoneParticipante.setCellStyle(borderRight);
		}

		XSSFCellStyle borderLeft = workbook.createCellStyle();
		borderLeft.setBorderLeft(BorderStyle.THIN);
		borderLeft.setBorderBottom(BorderStyle.THIN);

		XSSFCellStyle borderRight = workbook.createCellStyle();
		borderRight.setBorderRight(BorderStyle.THIN);
		borderRight.setBorderBottom(BorderStyle.THIN);

		sheet.getRow(rownum-1).getCell(1).setCellStyle(borderLeft);
		sheet.getRow(rownum-1).getCell(5).setCellStyle(borderRight);

		XSSFCellStyle borderBottom = workbook.createCellStyle();
		borderBottom.setBorderBottom(BorderStyle.THIN);

		for(int col = 2; col < 5; col++)
			sheet.getRow(rownum-1).getCell(col).setCellStyle(borderBottom);
	}

	private void writePauta() {
		Cell pauta = sheet.getRow(++rownum).getCell(1);
		sheet.addMergedRegion(new CellRangeAddress(rownum, rownum,1,5));
		pauta.setCellValue("PAUTA");

		XSSFCellStyle stylePauta = workbook.createCellStyle();
		stylePauta.setBorderBottom(BorderStyle.THIN);
		stylePauta.setBorderRight(BorderStyle.THIN);
		stylePauta.setBorderLeft(BorderStyle.THIN);
		stylePauta.setBorderTop(BorderStyle.THIN);
		stylePauta.setAlignment(HorizontalAlignment.CENTER);

		for(int col = 1; col < 6; col++)
			pauta.getRow().getCell(col).setCellStyle(stylePauta);

		XSSFFont font = workbook.createFont();
		font.setFontHeightInPoints((short)10);
		font.setFontName("Arial");
		font.setBold(true);
		font.setItalic(false);
		stylePauta.setFont(font);
		pauta.setCellStyle(stylePauta);


		Cell conteudoPauta = sheet.getRow(++rownum).getCell(1);
		sheet.addMergedRegion(new CellRangeAddress(rownum, rownum,1,5));
		conteudoPauta.setCellValue(ata.getAtaPauta());
		conteudoPauta.getRow().setHeight((short) (350 * sheet.getDefaultRowHeightInPoints()));

		XSSFCellStyle styleConteudoPauta = workbook.createCellStyle();
		styleConteudoPauta.setBorderBottom(BorderStyle.THIN);
		styleConteudoPauta.setBorderRight(BorderStyle.THIN);
		styleConteudoPauta.setBorderLeft(BorderStyle.THIN);
		styleConteudoPauta.setBorderTop(BorderStyle.THIN);
		styleConteudoPauta.setVerticalAlignment(VerticalAlignment.TOP);
		styleConteudoPauta.setWrapText(true);
		conteudoPauta.setCellStyle(styleConteudoPauta);

		for(int col = 1; col < 6; col++)
			conteudoPauta.getRow().getCell(col).setCellStyle(styleConteudoPauta);

	}

	private void writeObservacao() {
		rownum++;
		Cell observacao = sheet.getRow(++rownum).getCell(1);
		sheet.addMergedRegion(new CellRangeAddress(rownum, rownum,1,5));
		observacao.setCellValue("OBSERVAÇÕES");

		XSSFCellStyle styleObservacao = workbook.createCellStyle();
		styleObservacao.setBorderBottom(BorderStyle.THIN);
		styleObservacao.setBorderLeft(BorderStyle.THIN);
		styleObservacao.setAlignment(HorizontalAlignment.CENTER);
		styleObservacao.setBorderTop(BorderStyle.THIN);
		styleObservacao.setBorderRight(BorderStyle.THIN);

		for(int col = 1; col < 6; col++)
			observacao.getRow().getCell(col).setCellStyle(styleObservacao);

		XSSFFont font = workbook.createFont();
		font.setFontHeightInPoints((short)10);
		font.setFontName("Arial");
		font.setItalic(false);
		font.setBold(true);
		styleObservacao.setFont(font);
		observacao.setCellStyle(styleObservacao);

		Cell conteudoObservacao = sheet.getRow(++rownum).getCell(1);
		sheet.addMergedRegion(new CellRangeAddress(rownum, rownum,1,5));
		conteudoObservacao.setCellValue(ata.getAtaObservacao());
		conteudoObservacao.getRow().setHeight((short) (200 * sheet.getDefaultRowHeightInPoints()));

		XSSFCellStyle styleConteudoObs = workbook.createCellStyle();
		styleConteudoObs.setBorderLeft(BorderStyle.THIN);
		styleConteudoObs.setBorderTop(BorderStyle.THIN);
		styleConteudoObs.setBorderBottom(BorderStyle.THIN);
		styleConteudoObs.setBorderRight(BorderStyle.THIN);
		styleConteudoObs.setVerticalAlignment(VerticalAlignment.TOP);
		styleConteudoObs.setWrapText(true);
		conteudoObservacao.setCellStyle(styleConteudoObs);

		for(int col = 1; col < 6; col++)
			conteudoObservacao.getRow().getCell(col).setCellStyle(styleConteudoObs);

	}

	private void writeRevisoes() {
		rownum++;
		Cell revisao = sheet.getRow(++rownum).getCell(1);
		sheet.addMergedRegion(new CellRangeAddress(rownum, rownum,1,5));
		revisao.setCellValue("REVISÕES");

		XSSFCellStyle styleRevisao = workbook.createCellStyle();
		styleRevisao.setBorderBottom(BorderStyle.THIN);
		styleRevisao.setBorderLeft(BorderStyle.THIN);
		styleRevisao.setBorderTop(BorderStyle.THIN);
		styleRevisao.setBorderRight(BorderStyle.THIN);
		styleRevisao.setAlignment(HorizontalAlignment.CENTER);

		for(int coluna = 1; coluna < 6; coluna++)
			revisao.getRow().getCell(coluna).setCellStyle(styleRevisao);

		XSSFFont font = workbook.createFont();
		font.setFontHeightInPoints((short)10);
		font.setItalic(false);
		font.setBold(true);
		font.setFontName("Arial");
		styleRevisao.setFont(font);
		revisao.setCellStyle(styleRevisao);

		Cell conteudoRevisao = sheet.getRow(++rownum).getCell(1);
		sheet.addMergedRegion(new CellRangeAddress(rownum, rownum,1,5));

		DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		StringBuilder texto = new StringBuilder();
		int cont = 0;
		for (RevisoesModel revisaoModel : revisoes) {
			texto.append("\"").append(revisaoModel.getRevAssunto()).append("\"")
				 .append(" - ").append(revisaoModel.getResponsavelRevisoes().getUsuNome())
				 .append(", no dia ").append(revisaoModel.getRevData().format(dateFormat))
				 .append(" - ID: ").append(++cont).append(".\n\n");
		}
		conteudoRevisao.setCellValue(texto.toString());


		conteudoRevisao.getRow().setHeight((short) (200 * sheet.getDefaultRowHeightInPoints()));
		XSSFCellStyle styleConteudoPauta = workbook.createCellStyle();
		styleConteudoPauta.setBorderLeft(BorderStyle.THIN);
		styleConteudoPauta.setBorderBottom(BorderStyle.THIN);
		styleConteudoPauta.setBorderRight(BorderStyle.THIN);
		styleConteudoPauta.setBorderTop(BorderStyle.THIN);
		styleConteudoPauta.setVerticalAlignment(VerticalAlignment.TOP);
		styleConteudoPauta.setWrapText(true);
		conteudoRevisao.setCellStyle(styleConteudoPauta);

		for(int col = 1; col < 6; col++)
			conteudoRevisao.getRow().getCell(col).setCellStyle(styleConteudoPauta);

	}
	
	private void writeAssuntos() {
		rownum += 2;

		XSSFCellStyle borderBottom = workbook.createCellStyle();
		borderBottom.setBorderBottom(BorderStyle.THIN);
		for(int col = 1; col < 6; col++)
			sheet.getRow(rownum-1).getCell(col).setCellStyle(borderBottom);

		XSSFCellStyle styleCell = workbook.createCellStyle();
		XSSFFont font = workbook.createFont();
		font.setFontHeightInPoints((short)10);
		font.setFontName("Arial");
		font.setBold(true);
		font.setItalic(false);
		styleCell.setFont(font);

		XSSFCellStyle borderLeft = workbook.createCellStyle();
		borderLeft.setBorderLeft(BorderStyle.THIN);
		borderLeft.setFont(font);

		XSSFCellStyle borderRight = workbook.createCellStyle();
		borderRight.setBorderRight(BorderStyle.THIN);
		borderRight.setFont(font);

		XSSFCell assuntosIdCab = sheet.getRow(rownum).getCell(1);
		assuntosIdCab.setCellValue("ID");
		assuntosIdCab.setCellStyle(borderLeft);

        sheet.addMergedRegion(new CellRangeAddress(rownum, rownum, 2, 3));
        XSSFCell assuntosCab = sheet.getRow(rownum).getCell(2);
        assuntosCab.setCellValue("ASSUNTO");
        assuntosCab.setCellStyle(styleCell);

        XSSFCell assuntosRespCab = sheet.getRow(rownum).getCell(4);
        assuntosRespCab.setCellValue("RESPONSÁVEL");
        assuntosRespCab.setCellStyle(styleCell);

        XSSFCell assuntosPrazoCab = sheet.getRow(rownum).getCell(5);
        assuntosPrazoCab.setCellValue("PRAZO");
        assuntosPrazoCab.setCellStyle(borderRight);

        int idAssunto = 0;
		for (AssuntosModel assunto : ata.getAssuntos()) {
			borderLeft = workbook.createCellStyle();
			borderLeft.setBorderLeft(BorderStyle.THIN);

			borderRight = workbook.createCellStyle();
			borderRight.setBorderRight(BorderStyle.THIN);

			Cell idAssunto1 = sheet.getRow(++rownum).getCell(1);
			idAssunto1.setCellValue(String.valueOf(++idAssunto));
			idAssunto1.setCellStyle(borderLeft);

			sheet.addMergedRegion(new CellRangeAddress(rownum, rownum, 2, 3));
			Cell nomeAssunto1 = sheet.getRow(rownum).getCell(2);
			nomeAssunto1.setCellValue(assunto.getAssAssunto());

			Cell responsavelAssunto1 = sheet.getRow(rownum).getCell(4);

			ArrayList<String> nomes = new ArrayList<>();
			for (UsuariosModel participante: assunto.getResponsavelAssuntos())
				nomes.add(participante.getUsuNome());
			responsavelAssunto1.setCellValue(String.join(", ", nomes));

			DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("dd/MM/yyyy");
			Cell prazoAssunto1 = sheet.getRow(rownum).getCell(5);
			prazoAssunto1.setCellValue(assunto.getAssPrazo().format(dateFormat));
			prazoAssunto1.setCellStyle(borderRight);

		}

		XSSFCellStyle borderTop = workbook.createCellStyle();
		borderTop.setBorderTop(BorderStyle.THIN);
		for(int col = 1; col < 6; col++)
			sheet.getRow(rownum+1).getCell(col).setCellStyle(borderTop);
	}
	
	private void writeAsssinaturas() throws IOException {
		rownum += 2;

		sheet.addMergedRegion(new CellRangeAddress(rownum, rownum,1,5));
		Cell dist = sheet.getRow(rownum).getCell(1);
		dist.setCellValue("DISTRIBUIÇÃO");

		XSSFCellStyle styleAssinatura = workbook.createCellStyle();
		styleAssinatura.setBorderLeft(BorderStyle.THIN);
		styleAssinatura.setBorderTop(BorderStyle.THIN);
		styleAssinatura.setBorderBottom(BorderStyle.THIN);
		styleAssinatura.setBorderRight(BorderStyle.THIN);
		styleAssinatura.setAlignment(HorizontalAlignment.CENTER);

		XSSFFont font = workbook.createFont();
		font.setFontHeightInPoints((short)10);
		font.setFontName("Arial");
		font.setBold(true);
		font.setItalic(false);
		styleAssinatura.setFont(font);

		for(int col = 1; col < 6; col++)
			dist.getRow().getCell(col).setCellStyle(styleAssinatura);

		rownum += 2;
		for (UsuariosModel participante : ata.getParticipaAtas()) {
			byte[] assinatura = toByteArray(resizeImage(createImageFromBytes(participante.getUsuAssinatura())));
			int pictureIdx = workbook.addPicture(assinatura, Workbook.PICTURE_TYPE_PNG);

			CreationHelper helper = workbook.getCreationHelper();
			XSSFDrawing drawing = sheet.createDrawingPatriarch();
			ClientAnchor anchor = helper.createClientAnchor();
			anchor.setCol1(1);
			anchor.setRow1(rownum);

			Picture pict = drawing.createPicture(anchor, pictureIdx);
			pict.resize();

			Cell nome = sheet.getRow(rownum+6).getCell(1);
			nome.setCellValue("NOME: " + participante.getUsuNome() + " - " + participante.getUsuAreaEmpresa());

			XSSFCellStyle style = workbook.createCellStyle();
			style.setWrapText(false);
			nome.setCellStyle(style);

			rownum += 9;
		}

	}

	private void writeAviso() {
		rownum++;
		Cell aviso = sheet.getRow(++rownum).getCell(1);
		sheet.addMergedRegion(new CellRangeAddress(rownum, rownum,1,5));
		aviso.getRow().setHeight((short) (50 * sheet.getDefaultRowHeightInPoints()));
		aviso.setCellValue("ESTA É UMA VERSÃO DE CONSULTA DA ATA DE REUNIÃO. " +
				"PARA ACESSO AO DOCUMENTO OFICIAL É NECESSÁRIO ACESSAR O SISATAS.");

		XSSFCellStyle styleAviso = workbook.createCellStyle();
		styleAviso.setBorderBottom(BorderStyle.THIN);
		styleAviso.setBorderTop(BorderStyle.THIN);
		styleAviso.setBorderRight(BorderStyle.THIN);
		styleAviso.setAlignment(HorizontalAlignment.CENTER);
		styleAviso.setVerticalAlignment(VerticalAlignment.CENTER);
		styleAviso.setBorderLeft(BorderStyle.THIN);
		styleAviso.setWrapText(true);

		for(int colu = 1; colu < 6; colu++)
			aviso.getRow().getCell(colu).setCellStyle(styleAviso);

		XSSFFont fonte = workbook.createFont();
		fonte.setItalic(false);
		fonte.setBold(true);
		fonte.setFontName("Arial");
		fonte.setFontHeightInPoints((short)10);
		styleAviso.setFont(fonte);
		aviso.setCellStyle(styleAviso);

	}

	public byte[] getByteArray(boolean comAssinatura) throws IOException {
		writeCabecalho(); writeParticipantes(); writePauta();
		writeObservacao(); writeAssuntos(); writeRevisoes(); writeAviso();
		if (comAssinatura) writeAsssinaturas();
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		workbook.write(bos); workbook.close();
		return bos.toByteArray();
	}

}
// http://localhost:8080/download/ata/excel/01/21
