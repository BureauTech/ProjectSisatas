package br.com.iacit.sisatas.DAO.converters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import br.com.iacit.sisatas.DAO.models.Perfis;
import br.com.iacit.sisatas.DAO.repository.PerfisRepository;

@Component
public class PerfisConverter implements Converter<Long, Perfis> {
	
	@Autowired
	PerfisRepository pr;
	
	@Override
	public Perfis convert(Long per_id) {
		Perfis perfil = pr.getOne(per_id.toString());
		return perfil;
	}
    
}