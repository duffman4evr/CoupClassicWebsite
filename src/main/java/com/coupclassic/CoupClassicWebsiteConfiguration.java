package com.coupclassic;

import io.dropwizard.Configuration;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.*;
import javax.validation.constraints.*;

public class CoupClassicWebsiteConfiguration extends Configuration {

    @NotEmpty
    private String stage;

    @JsonProperty
    public String getStage() {
        return stage;
    }

    @JsonProperty
    public void setStage(String stage) {
        this.stage = stage;
    }
}
