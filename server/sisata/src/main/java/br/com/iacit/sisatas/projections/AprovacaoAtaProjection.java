package br.com.iacit.sisatas.projections;

public interface AprovacaoAtaProjection {
  String getAprDescricao();
  AtaReferenciaProjection getAtaReferencia();
  AprovaAtaProjection getAprovaAta();

  interface AtaReferenciaProjection {
    String getAtaId();
  }

  interface AprovaAtaProjection {
    Long getUsuId();
    String getUsuNome();
  }
}
