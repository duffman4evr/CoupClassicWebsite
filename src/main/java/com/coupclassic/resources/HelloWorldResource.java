package com.coupclassic.resources;

import com.codahale.metrics.annotation.Timed;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import java.util.Optional;

@Path("/hello-world")
public class HelloWorldResource {

    private String stage;

    public HelloWorldResource(final String stage) {
        this.stage = stage;
    }

    @GET
    @Timed
    public String sayHello(@QueryParam("name") Optional<String> passedName) {
        final String name = passedName.orElse("User");
        return String.format("Hello, %s - from Dropwizard in %s", name, stage);
    }
}
