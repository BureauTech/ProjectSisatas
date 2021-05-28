package br.com.iacit.sisatas.controllers;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.LinkedList;
import java.util.List;

import br.com.iacit.sisatas.models.AtasModel;
import br.com.iacit.sisatas.models.RevisoesModel;
import br.com.iacit.sisatas.repository.AtasRepository;
import br.com.iacit.sisatas.repository.RevisoesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.iacit.sisatas.exports.EscritorExcel;

@CrossOrigin
@RestController
@RequestMapping("/download")
public class DownloadController {

	@Autowired
	private AtasRepository ap;

	@Autowired
	private RevisoesRepository rr;
	
	@GetMapping("/ata/excel/{cod}/{ano}")
	public ResponseEntity<Resource> AtaExcel(@PathVariable String cod, @PathVariable String ano) throws IOException, URISyntaxException {

		AtasModel ata = ap.getOne(cod + "/" + ano);

		List<RevisoesModel> revisoes = new LinkedList<>();
		for (RevisoesModel revisao : rr.findAll())
			if (revisao.getContemRevisoes().getAtaId().equals(ata.getAtaId()))
				revisoes.add(revisao);

		EscritorExcel escritor = new EscritorExcel(ata, revisoes);
		byte[] byteArray = escritor.getByteArray(false);
		ByteArrayResource resource = new ByteArrayResource(byteArray);

		HttpHeaders header = new HttpHeaders();
		header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ata.xlsx");
		header.add("Cache-Control", "no-cache, no-store, must-revalidate");
		header.add("Pragma", "no-cache");
		header.add("Expires", "0");

		return ResponseEntity.ok()
			.headers(header)
			.contentLength(byteArray.length)
			.contentType(MediaType.parseMediaType("application/octet-stream"))
			.body(resource);
	        
	}
}
// http://localhost:8080/download/ata/excel/01/21
