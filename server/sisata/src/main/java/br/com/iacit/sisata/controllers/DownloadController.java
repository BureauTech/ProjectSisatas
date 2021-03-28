package br.com.iacit.sisata.controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	        //header.setContentType(new MediaType("applicaton", "octet-stream", StandardCharsets.UTF_8));
	        header.add("Cache-Control", "no-cache, no-store, must-revalidate");
	        header.add("Pragma", "no-cache");
	        header.add("Expires", "0");
			
	        byte[] ata = new EscritorExcel().getAta();
	        ByteArrayResource resource = new ByteArrayResource(ata);
	        //byte[] resource = new EscritorExcel().getAta();
	        
	        return ResponseEntity.ok()
	                .headers(header)
	                .contentLength(ata.length)
	                .contentType(MediaType.parseMediaType("application/octet-stream"))
	                .body(resource);
			
	        
	        
	}
}
