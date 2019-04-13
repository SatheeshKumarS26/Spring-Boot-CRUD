package com.example.test.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
class BackendPeopleController {
    private PeopleRepository repository;

    public BackendPeopleController(PeopleRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/backend")
    public Collection<People> coolCars() {
        return repository.findAll().stream()
                .filter(this::isTrue)
                .collect(Collectors.toList());
    }

    private boolean isTrue(People people) {
        return  people.getName().equals("Satheesh") &&
                 people.getName().equals("Yowan") &&
                 people.getName().equals("Shreesh");
    }
}