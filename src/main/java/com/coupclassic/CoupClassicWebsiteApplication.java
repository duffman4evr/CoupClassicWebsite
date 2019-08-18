package com.coupclassic;

import com.coupclassic.resources.HelloWorldResource;
import com.coupclassic.resources.PingResource;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class CoupClassicWebsiteApplication extends Application<CoupClassicWebsiteConfiguration> {

    public static void main(final String[] args) throws Exception {
        new CoupClassicWebsiteApplication().run(args);
    }

    @Override
    public String getName() {
        return "CoupClassicWebsite";
    }

    @Override
    public void initialize(final Bootstrap<CoupClassicWebsiteConfiguration> bootstrap) {
        bootstrap.addBundle(new AssetsBundle("/assets","/", "about.html"));
    }

    @Override
    public void run(final CoupClassicWebsiteConfiguration configuration,
                    final Environment environment) {

        environment.jersey().setUrlPattern("/api/*");

        final HelloWorldResource helloWorldResource = new HelloWorldResource(configuration.getStage());
        environment.jersey().register(helloWorldResource);
        environment.jersey().register(new PingResource());
    }
}
