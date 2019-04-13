package com.example.test.demo;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
public class People {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String name;  
}