package com.example.test.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
interface PeopleRepository extends JpaRepository<People, Long> {
}