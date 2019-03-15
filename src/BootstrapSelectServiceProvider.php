<?php

namespace KluseG\BootstrapSelect;

use Illuminate\Support\ServiceProvider;

class BootstrapSelectServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot()
    {
        // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'kluseg');
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'kluseg');
        // $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        // $this->loadRoutesFrom(__DIR__.'/routes.php');

        // Publishing is only necessary when using the CLI.
        if ($this->app->runningInConsole()) {
            $this->bootForConsole();
        }

        $this->registerBladeExtensions();
    }

    /**
     * Register any package services.
     *
     * @return void
     */
    public function register()
    {
        // $this->mergeConfigFrom(__DIR__.'/../config/bootstrapselect.php', 'bootstrapselect');

        // Register the service the package provides.
        $this->app->singleton('bootstrapselect', function ($app) {
            return new BootstrapSelect;
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['bootstrapselect'];
    }
    
    /**
     * Console-specific booting.
     *
     * @return void
     */
    protected function bootForConsole()
    {
        // Publishing the configuration file.
        // $this->publishes([
        //     __DIR__.'/../config/bootstrapselect.php' => config_path('bootstrapselect.php'),
        // ], 'bootstrapselect.config');

        // Publishing the views.
        $this->publishes([
            __DIR__.'/../resources/views' => base_path('resources/views/vendor/kluseg'),
        ], 'BootstrapSelect components');

        // Publishing assets.
        $this->publishes([
            __DIR__.'/../resources/assets' => resource_path('assets/vendor/kluseg'),
        ], 'BootstrapSelect assets');

        // Publishing the translation files.
        /*$this->publishes([
            __DIR__.'/../resources/lang' => resource_path('lang/vendor/kluseg'),
        ], 'bootstrapselect.views');*/

        // Registering package commands.
        // $this->commands([]);
    }

    protected function registerBladeExtensions()
    {
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'bs');
    }
}
