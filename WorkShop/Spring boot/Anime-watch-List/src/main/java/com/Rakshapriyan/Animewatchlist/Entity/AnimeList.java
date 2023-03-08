package com.Rakshapriyan.Animewatchlist.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "anime_list")
public class AnimeList {
	
	@Id
	private String sNo;
	private String aname;
	private String episodes;
	private String genre;
	private String is_done;
	private String target_date;
	
	
	
	public AnimeList(String sNo, String aname, String episodes, String genre, String is_done, String target_date) {
		super();
		this.sNo = sNo;
		this.aname = aname;
		this.episodes = episodes;
		this.genre = genre;
		this.is_done = is_done;
		this.target_date = target_date;
	}



	public String getsNo() {
		return sNo;
	}



	public void setsNo(String sNo) {
		this.sNo = sNo;
	}



	public String getAname() {
		return aname;
	}



	public void setAname(String aname) {
		this.aname = aname;
	}



	public String getEpisodes() {
		return episodes;
	}



	public void setEpisodes(String episodes) {
		this.episodes = episodes;
	}



	public String getGenre() {
		return genre;
	}



	public void setGenre(String genre) {
		this.genre = genre;
	}



	public String getIs_done() {
		return is_done;
	}



	public void setIs_done(String is_done) {
		this.is_done = is_done;
	}



	public String getTarget_date() {
		return target_date;
	}



	public void setTarget_date(String target_date) {
		this.target_date = target_date;
	}



	public AnimeList() {
		
	}
	
}
