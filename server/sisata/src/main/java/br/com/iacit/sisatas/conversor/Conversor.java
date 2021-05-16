package br.com.iacit.sisatas.conversor;

import java.util.Calendar;

public class Conversor {

  public String calcularId (String idBanco) {

    /**
     * Realiza o cálculo do novo ID da ata
     * 
     * @Author Denis Lima
     * 
     * @Param idBanco     último ID retornado pelo banco
     * 
     * @Return            Retorna o novo ID da ata para salvar no banco
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
}