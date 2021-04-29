package br.com.iacit.sisatas.exports;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.iacit.sisatas.repository.AtasRepository;
import br.com.iacit.sisatas.models.Atas;

public class EscritorExcel {
	
	@Autowired
	private AtasRepository ap;
	
	private Atas ata;
	private String templatePath;
	private XSSFWorkbook workbook;
	private XSSFSheet sheet;
	
	public EscritorExcel(long ataId) throws IOException, URISyntaxException {
		this.ata = ap.findByataId(ataId);
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
		numero.setCellValue("ATA Nº.: 01/21");

		Cell data = sheet.getRow(1).getCell(3);
		data.setCellValue("DATA: 24/03/2021");

		Cell horaInicio = sheet.getRow(2).getCell(3);
		horaInicio.setCellValue("INÍCIO: 08:00");

		Cell horaFim = sheet.getRow(2).getCell(4);
		horaFim.setCellValue("FIM: 10:00");

		Cell local = sheet.getRow(3).getCell(3);
		local.setCellValue("LOCAL: Prédio da empresa ABC");
		
		Cell nomeProjeto = sheet.getRow(7).getCell(1);
		nomeProjeto.setCellValue("Projeto: XYZ123");
	}
	
	private void writeParticipantes() {
		//for (Usuarios usuario : ap.) {		
			Cell nomeParticipante1 = sheet.getRow(9).getCell(1);
			nomeParticipante1.setCellValue("Fulano");
	
			Cell areaParticipante1 = sheet.getRow(9).getCell(3);
			areaParticipante1.setCellValue("AAAA");
	
			Cell emailParticipante1 = sheet.getRow(9).getCell(4);
			emailParticipante1.setCellValue("fulano@aaaa.com");
	
			Cell telefoneParticipante1 = sheet.getRow(9).getCell(5);
			telefoneParticipante1.setCellValue("55(12)XXXXX-XXXX");
			
		//}
		
		Cell nomeParticipante2 = sheet.getRow(10).getCell(1);
		nomeParticipante2.setCellValue("Beltrano");

		Cell areaParticipante2 = sheet.getRow(10).getCell(3);
		areaParticipante2.setCellValue("BBBB");

		Cell emailParticipante2 = sheet.getRow(10).getCell(4);
		emailParticipante2.setCellValue("beltrano@bbbb.com");

		Cell telefoneParticipante2 = sheet.getRow(10).getCell(5);
		telefoneParticipante2.setCellValue("55(11)XXXXX-XXXX");
	}
	
	private void writePauta() {
		Cell conteudoPauta = sheet.getRow(13).getCell(1);
		conteudoPauta.setCellValue("*Todo conteúdo da reunião*");

		Cell observaoes = sheet.getRow(15).getCell(1);
		observaoes.setCellValue("Observações:\r\n"
				+ "1 - Deve ser disponibilzada cópia da Ata de Reunião para os participantes e envolvidos;\r\n"
				+ "2 - O campo PRAZO deine as datas de entrega das solicitações por parte dos responsáveis "
				+ "definidos no campo RESPONSÁVEL.");
	}
	
	private void writeAssuntos() {
		Cell idAssunto1 = sheet.getRow(18).getCell(1);
		idAssunto1.setCellValue(1);

		Cell nomeAssunto1 = sheet.getRow(18).getCell(2);
		nomeAssunto1.setCellValue("ASSUNTO ABC");

		Cell responsavelAssunto1 = sheet.getRow(18).getCell(4);
		responsavelAssunto1.setCellValue("Fulano");

		Cell prazoAssunto1 = sheet.getRow(18).getCell(5);
		prazoAssunto1.setCellValue("XX/XX/XXXX");
		
		

		Cell idAssunto2 = sheet.getRow(19).getCell(1);
		idAssunto2.setCellValue(2);

		Cell nomeAssunto2 = sheet.getRow(19).getCell(2);
		nomeAssunto2.setCellValue("ASSUNTO XYZ");

		Cell responsavelAssunto2 = sheet.getRow(19).getCell(4);
		responsavelAssunto2.setCellValue("Beltrano");

		Cell prazoAssunto2 = sheet.getRow(19).getCell(5);
		prazoAssunto2.setCellValue("YY/YY/YYYY");
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
