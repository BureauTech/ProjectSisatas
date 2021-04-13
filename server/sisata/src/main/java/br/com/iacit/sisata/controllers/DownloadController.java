package br.com.iacit.sisata.controllers;

import java.io.IOException;
import java.net.URISyntaxException;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.iacit.sisata.exports.EscritorExcel;

@CrossOrigin
@RestController
@RequestMapping("/download")
public class DownloadController {
	
	@GetMapping("/ata/excel")
	public ResponseEntity<Resource> AtaExcel() throws IOException, URISyntaxException {
		
		 HttpHeaders header = new HttpHeaders();
	        header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ata.xlsx");
	        header.add("Cache-Control", "no-cache, no-store, must-revalidate");
	        header.add("Pragma", "no-cache");
	        header.add("Expires", "0");
			
	        byte[] ata = new EscritorExcel().getAta();
	        ByteArrayResource resource = new ByteArrayResource(ata);
	        
	        return ResponseEntity.ok()
	                .headers(header)
	                .contentLength(ata.length)
	                .contentType(MediaType.parseMediaType("application/octet-stream"))
	                .body(resource);
	}
}
