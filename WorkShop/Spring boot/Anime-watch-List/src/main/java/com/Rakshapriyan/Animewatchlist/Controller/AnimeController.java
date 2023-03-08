package com.Rakshapriyan.Animewatchlist.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Rakshapriyan.Animewatchlist.Entity.AnimeList;
import com.Rakshapriyan.Animewatchlist.Service.AnimeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AnimeController {
	
	@Autowired
	private AnimeService service;
	
	@PostMapping("/anime")
	public List<AnimeList> postDetails(@RequestBody AnimeList s)
	{
			service.saveDetails(s);
			return service.getAllDetails();
	}
	
	@GetMapping("/anime")
	public List<AnimeList> getDetails(){
		try {
			return service.getAllDetails();
			
		}
		catch(Exception e) {
			return null;
		}
	}
	
	
	@DeleteMapping("/anime/{id}")
	public String deleteDetails(@PathVariable String id) {
		try {
			service.deleteByNo(id);
			
		}
		catch(Exception e) {
			return "Oops!!! Details cannot be found!!";
		}
		return "Value Deleted";
	}
	
	
	@PutMapping("/anime/{id}")
	public AnimeList updateDetails(@PathVariable int id, @RequestBody AnimeList w) {
		try {
			return service.updateDetails(id, w);
			
		}
		catch(Exception e) {
			return null;
		}
	}
	
}
