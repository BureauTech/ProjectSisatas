package br.com.iacit.sisatas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.iacit.sisatas.models.LogsModel;
import br.com.iacit.sisatas.repository.LogsRepository;

@Controller
@RequestMapping("/logs")
public class LogsController {

		@Autowired
		private LogsRepository lp;

		@ResponseBody
		@RequestMapping(value = "/cadastrarLogs", method = RequestMethod.POST, consumes = "application/json")
		public String cadastrarLogs(@RequestBody LogsModel log) {
			String result = null;
			try {
				lp.save(log);
			} catch (DataAccessException e) {
				e.printStackTrace();
				result = e.getMessage();
			}
			return result;
		}
		
		@ResponseBody
		@RequestMapping(value = "/listarLogs", method = RequestMethod.GET)
		public List<LogsModel> listarLogs() {
			List<LogsModel> log = null;
			try {
				log = lp.findAll();
			} catch (DataAccessException e) {
				e.printStackTrace();
			}

			return log;
		}
}
