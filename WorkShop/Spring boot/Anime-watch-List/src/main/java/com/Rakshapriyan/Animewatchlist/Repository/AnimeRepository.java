package com.Rakshapriyan.Animewatchlist.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Rakshapriyan.Animewatchlist.Entity.AnimeList;

public interface AnimeRepository extends JpaRepository<AnimeList, String> {
	

}
