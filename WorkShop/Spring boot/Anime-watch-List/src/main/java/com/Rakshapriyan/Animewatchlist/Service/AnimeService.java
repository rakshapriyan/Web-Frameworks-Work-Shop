package com.Rakshapriyan.Animewatchlist.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.Rakshapriyan.Animewatchlist.Entity.AnimeList;
import com.Rakshapriyan.Animewatchlist.Repository.AnimeRepository;



@Service
public class AnimeService {
	
	@Autowired
	private AnimeRepository repo;
	
	
	
	public AnimeList saveDetails(AnimeList w)   //post
	{
		return repo.save(w);
	}
	
	public List<AnimeList> getAllDetails()  //get
	{
		return repo.findAll();
	}
	 public void deleteByNo(String sNo)   //del
	    {
		 	System.out.println(sNo);
		 	repo.deleteById(sNo);
		 	System.out.println(sNo);

	    }

	 	public AnimeList updateDetails(int id, AnimeList w) {  //
	 		return repo.saveAndFlush(w);
	 	}
	
	
}
