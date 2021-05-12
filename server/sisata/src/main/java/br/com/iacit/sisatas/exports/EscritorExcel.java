package br.com.iacit.sisatas.exports;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;

import br.com.iacit.sisatas.models.AssuntosModel;
import br.com.iacit.sisatas.models.UsuariosModel;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.*;
import br.com.iacit.sisatas.models.AtasModel;

public class EscritorExcel {

	private AtasModel ata;
	private String templatePath;
	private XSSFWorkbook workbook;
	private XSSFSheet sheet;
	private int rownum;
	
	public EscritorExcel(AtasModel ata) throws IOException, URISyntaxException {
		this.ata = ata;
		this.templatePath = "templates/template.xlsx";
		
		ClassLoader classLoader = getClass().getClassLoader();
        URL resource = classLoader.getResource(templatePath);
        File file = new File(resource.toURI());
		FileInputStream fileInput = new FileInputStream(file);
		
		this.workbook = new XSSFWorkbook(fileInput);
		this.sheet = workbook.getSheetAt(0);
	}
	
	private void writeCabecalho() {
		Cell numero = sheet.getRow(1).getCell(1);
		numero.setCellValue("ATA Nº.: " + ata.getAtaId());

		Cell data = sheet.getRow(1).getCell(3);
		data.setCellValue("DATA: " + ata.getAtaDataInicio());

		Cell horaInicio = sheet.getRow(2).getCell(3);
		horaInicio.setCellValue("INÍCIO: " + ata.getAtaHoraInicio());

		Cell horaFim = sheet.getRow(2).getCell(4);
		horaFim.setCellValue("FIM: " + ata.getAtaHoraFim());

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
		conteudoPauta.getRow().setHeight((short) (300 * sheet.getDefaultRowHeightInPoints()));

		XSSFCellStyle styleConteudoPauta = workbook.createCellStyle();
		styleConteudoPauta.setBorderBottom(BorderStyle.THIN);
		styleConteudoPauta.setBorderRight(BorderStyle.THIN);
		styleConteudoPauta.setBorderLeft(BorderStyle.THIN);
		styleConteudoPauta.setBorderTop(BorderStyle.THIN);
		styleConteudoPauta.setVerticalAlignment(VerticalAlignment.TOP);
		conteudoPauta.setCellStyle(styleConteudoPauta);

		for(int col = 1; col < 6; col++)
			conteudoPauta.getRow().getCell(col).setCellStyle(styleConteudoPauta);

	}
	
	private void writeAssuntos() {
		rownum += 3;

		for (AssuntosModel assunto : ata.getAssuntos()) {
			Cell idAssunto1 = sheet.getRow(rownum).getCell(1);
			idAssunto1.setCellValue(assunto.getAssId());

			Cell nomeAssunto1 = sheet.getRow(rownum).getCell(2);
			nomeAssunto1.setCellValue(assunto.getAssAssunto());

			Cell responsavelAssunto1 = sheet.getRow(rownum).getCell(4);
			responsavelAssunto1.setCellValue(assunto.getResponsavelAssuntos().get(0).getUsuNome());

			Cell prazoAssunto1 = sheet.getRow(rownum).getCell(5);
			prazoAssunto1.setCellValue(assunto.getAssPrazo().toString());

			rownum++;

			// http://localhost:8080/download/ata/excel/01/21
		}
	}
	
	private void writeAsssinaturas() {
		
	}

	public byte[] getByteArray() throws IOException {
		writeCabecalho(); writeParticipantes();
		writePauta(); writeAssuntos(); writeAsssinaturas();
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		workbook.write(bos); workbook.close();
		return bos.toByteArray();
	}

}
