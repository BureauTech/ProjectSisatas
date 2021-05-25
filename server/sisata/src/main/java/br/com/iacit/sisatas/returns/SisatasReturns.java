package br.com.iacit.sisatas.returns;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@SuppressWarnings(value = { "rawtypes" })
@JsonInclude(Include.NON_NULL)
public class SisatasReturns<T> {

	private String operacao;
	private Boolean erro;
	private String mensagem;
	private T data;

	public SisatasReturns returnOperacao(String operacao) {
		this.operacao = operacao;
		return this;
	}

	public SisatasReturns returnErro(Boolean erro) {
		this.erro = erro;
		return this;
	}

	public SisatasReturns returnMensagem(String mensagem) {
		this.mensagem = mensagem;
		return this;
	}

	public SisatasReturns returnData(T data) {
		this.data = data;
		return this;
	}
}
