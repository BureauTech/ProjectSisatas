package br.com.iacit.sisatas.returns;

import java.util.List;

import org.apache.poi.ss.formula.functions.T;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("hiding")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageReturn<T> {

	private String operacao;
	private Boolean erro;
	private String mensagem;
	private List<?> dataList;
	private T data;
	
}
