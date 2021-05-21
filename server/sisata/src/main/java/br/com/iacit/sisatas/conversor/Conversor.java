package br.com.iacit.sisatas.conversor;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import org.apache.commons.codec.binary.Base64;
import java.util.Calendar;

public class Conversor {

	public String calcularId(String idBanco) {

		/**
		 * Realiza o cálculo do novo ID da ata
		 * 
		 * @Author Denis Lima
		 * 
		 * @Param idBanco último ID retornado pelo banco
		 * 
		 * @Return Retorna o novo ID da ata para salvar no banco
		 */

		String anoAtual = String.valueOf(Calendar.getInstance().get(Calendar.YEAR));
		anoAtual = anoAtual.substring(2);
		String anoId = idBanco.substring(idBanco.indexOf("/") + 1);

		String idFinal;

		// Se for mesmo ano, incrementa 1
		// Caso contrário, cria um id 01/novoAno
		if (anoId.equals(anoAtual)) {
			idBanco = idBanco.substring(0, idBanco.indexOf("/"));
			int novoId = Integer.parseInt(idBanco) + 1;
			String complemento = String.valueOf(novoId).length() == 1 ? "0" : "";
			idFinal = complemento + String.valueOf(novoId) + "/" + anoAtual;
		} else {
			idFinal = "01/" + anoAtual;
		}

		return idFinal;
	}
	
	/**
	 * Gerador de hash
	 * 
	 * @Author Daniel Oliveira
	 * 
	 * @Return Retorna stringHash
	 */
	
	public static String geradorHashString(String string) throws UnsupportedEncodingException, NoSuchAlgorithmException {
		
		MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
		byte messageDigest[] = algorithm.digest(string.getBytes("UTF-8"));

		StringBuilder hexString = new StringBuilder();
		for (byte b : messageDigest) {
			hexString.append(String.format("%02X", 0xFF & b));
		}
		String stringHash = hexString.toString();
		
		return  stringHash;
	}
	
	/**
	 * Codifica string na base 64 (Encoder)
	 * 
	 * @Author Daniel Oliveira
	 * 
	 */
	
	public static String codificaBase64Encoder(String msg) {
		return new Base64().encodeToString(msg.getBytes());
	}

	/**
	 * Decodifica string na base 64 (Decoder)
	 * 
	 * @Author Daniel Oliveira
	 *
	 */
	
	public static String decodificaBase64Decoder(String msg) {
		return new String(new Base64().decode(msg));
	}
}