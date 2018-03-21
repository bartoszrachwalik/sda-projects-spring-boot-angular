package com.github.springboot.angular.player.application;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface PlayerRepository extends JpaRepository<PlayerEntity, Integer> {
}
