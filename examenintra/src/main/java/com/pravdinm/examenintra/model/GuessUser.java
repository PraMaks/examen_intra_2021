package com.pravdinm.examenintra.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class GuessUser {
    @Id
    @GeneratedValue
    private long id;

    private String name;

    private int numberGuessed;

    private int numberActual;
}
