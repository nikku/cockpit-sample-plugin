Sample Plugin for camunda cockpit
=================================

This is a simple plugin that showcases the plugin system of cockpit, the process monitoring tool of [camunda BPM](http://docs.camunda.org).

Built and tested against camunda BPM version `7.0.0-alpha4`.


Integrate into cockpit
----------------------

Add the plugin as a dependency to the cockpit `pom.xml` and rebuild the cockpit web application.

    <dependencies>
      ...
      <dependency>
        <groupId>org.camunda.bpm.cockpit.plugin</groupId>
        <artifactId>cockpit-sample-plugin</artifactId>
        <version>1.0-SNAPSHOT</version>
        <scope>runtime</scope>
      </dependency>


Guide
-----

Read the [plugin development how to](http://docs.camunda.org/how-tos/cockpit/develop-a-plugin/).


License
-------

Use under terms of MIT license.