package com.coupclassic.resources;

import com.codahale.metrics.annotation.Timed;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import java.util.Optional;

@Path("/ping")
public class PingResource {
    @GET
    @Timed
    public String ping() {
        return "pong";
    }
}
