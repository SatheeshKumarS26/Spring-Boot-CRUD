package com.example.test.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;
import org.springframework.boot.ApplicationRunner;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
    ApplicationRunner init(PeopleRepository repository) {
        return args -> {
            Stream.of("Satheesh", "Shreesh", "Yowan", "Bhushan", "Sai",
                      "Rajesh", "Syed", "Seelan").forEach(name -> {
                People car = new People();
                car.setName(name);
                repository.save(car);
            });
            repository.findAll().forEach(System.out::println);
        };
    }

}
