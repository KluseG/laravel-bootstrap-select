<?php

namespace KluseG\BootstrapSelect\Facades;

use Illuminate\Support\Facades\Facade;

class BootstrapSelect extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'bootstrapselect';
    }
}
