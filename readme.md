# BootstrapSelect

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Total Downloads][ico-downloads]][link-downloads]
[![Build Status][ico-travis]][link-travis]
[![StyleCI][ico-styleci]][link-styleci]

This is where your description should go. Take a look at [contributing.md](contributing.md) to see a to do list.

## Installation

Via Composer

``` bash
$ composer require kluseg/laravel-bootstrap-select
```

## Usage

```bash
$ php artisan vendor:publish --tag=laravel-bootstrap-select-assets
```

In webpack.mix.js

```javascript
mix.js('resources/assets/vendor/kluseg/js/multiple-select.js', 'public/js')
   .sass('resources/assets/vendor/kluseg/sass/multiple-select.scss', 'public/css')
```

In your views

```php
<div class="form-group">
    <label>I am multiple select!</label>
    @component('bs::multiple-select-sync', [
        'sm' => true,
        'model' => null,
        'items' => [
            [
                'name' => 'input_name_1',
                'value' => 'input_value_1',
                'label' => 'Label 1'
            ],
            [
                'name' => 'input_name_2',
                'value' => 'input_value_2',
                'label' => 'Label 2'
            ]
        ]
    ])
        Please select one
    @endcomponent
</div>
<div class="form-group">
    <label>I am single select!</label>
    @component('bs::multiple-select-sync', [
        'sm' => true,
        'model' => null,
        'items' => [
            [
                'group' => 'first_group',
                'label' => 'I am single select!',
                'unique' => true,
                'items' => [
                    [
                        'name' => 'input_name_1',
                        'value' => 'input_value_1',
                        'label' => 'Label 1'
                    ],
                    [
                        'name' => 'input_name_2',
                        'value' => 'input_value_2',
                        'label' => 'Label 2'
                    ]
                ]
            ],
        ]
    ])
        Please select one
    @endcomponent
</div>
<div class="form-group">
    <label>I am everything-in-one select!</label>
    @component('bs::multiple-select-sync', [
        'items' => [
            [
                'group' => 'first_group',
                'label' => 'I am unique group!',
                'unique' => true,
                'items' => [
                    [
                        'name' => 'input_name_1',
                        'value' => 'input_value_1',
                        'label' => 'Label 1'
                    ],
                    [
                        'name' => 'input_name_2',
                        'value' => 'input_value_2',
                        'label' => 'Label 2'
                    ]
                ]
            ],
            [
                'group' => 'second_group',
                'label' => 'I am not an unique group!',
                'unique' => false,
                'items' => [
                    [
                        'name' => 'input_name_1',
                        'value' => 'input_value_1',
                        'label' => 'Label 1'
                    ],
                    [
                        'name' => 'input_name_2',
                        'value' => 'input_value_2',
                        'label' => 'Label 2'
                    ]
                ]
            ],
        ]
    ])
        Please select one
    @endcomponent
</div>
```

## Change log

Please see the [changelog](changelog.md) for more information on what has changed recently.

## Testing

``` bash
$ composer test
```

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email author email instead of using the issue tracker.

## Credits

- [author name][link-author]
- [All Contributors][link-contributors]

## License

license. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/kluseg/bootstrapselect.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/kluseg/bootstrapselect.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/kluseg/bootstrapselect/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-packagist]: https://packagist.org/packages/kluseg/bootstrapselect
[link-downloads]: https://packagist.org/packages/kluseg/bootstrapselect
[link-travis]: https://travis-ci.org/kluseg/bootstrapselect
[link-styleci]: https://styleci.io/repos/12345678
[link-author]: https://github.com/kluseg
[link-contributors]: ../../contributors
