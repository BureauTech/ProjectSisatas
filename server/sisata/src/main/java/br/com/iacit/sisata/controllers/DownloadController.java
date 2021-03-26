package br.com.iacit.sisata.controllers;

import java.io.IOException;
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

@CrossOrigin
@RestController
@RequestMapping("/download")
public class DownloadController {
	
	@GetMapping("/ata/excel/{ata}")
	public ResponseEntity<Resource> AtaExcel(@PathVariable("ata") int id_ata) throws IOException {
		
		 HttpHeaders header = new HttpHeaders();
	        header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ata.xlsx");
	        header.add("Cache-Control", "no-cache, no-store, must-revalidate");
	        header.add("Pragma", "no-cache");
	        header.add("Expires", "0");
			

	        //Path path = Paths.get(//file.getAbsolutePath());
	        //ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

	        /*
	        return ResponseEntity.ok()
	                .headers(header)
	                .contentLength(file.length())
	                .contentType(MediaType.parseMediaType("application/octet-stream"))
	                .body(resource);
			*/
	        
	        return null;
	}
}
