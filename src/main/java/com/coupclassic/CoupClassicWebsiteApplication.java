package com.coupclassic;

import com.coupclassic.resources.HelloWorldResource;
import com.coupclassic.resources.PingResource;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.tuckey.web.filters.urlrewrite.UrlRewriteFilter;

import javax.servlet.FilterRegistration;

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
        bootstrap.addBundle(new AssetsBundle("/web/assets","/", "index.html"));
    }

    @Override
    public void run(final CoupClassicWebsiteConfiguration configuration,
                    final Environment environment) {

        // Needed so that dropwizard works with react-router:
        // https://stackoverflow.com/questions/45560374/configuration-changes-in-dropwizard-application-to-work-with-react-browserhistor
        final FilterRegistration.Dynamic registration = environment
                .servlets()
                .addFilter("UrlRewriteFilter", new UrlRewriteFilter());
        registration.addMappingForUrlPatterns(null, true, "/*");
        registration.setInitParameter("confPath", "resources/urlrewrite.xml");

        environment.jersey().setUrlPattern("/api/*");

        final HelloWorldResource helloWorldResource = new HelloWorldResource(configuration.getStage());
        environment.jersey().register(helloWorldResource);
        environment.jersey().register(new PingResource());
    }
}
