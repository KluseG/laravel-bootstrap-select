<div class="dropdown bs-select typeahead{{ ($sm ?? false) ? ' bs-select-sm' : '' }}">
    <input type="hidden" name="{{ $name }}" value="">
    <span class="original d-none">{{ $default }}</span>
    <button class="main-button form-control{{ ($sm ?? false) ? ' form-control-sm' : '' }}" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{ $slot }}
    </button>
    <div class="dropdown-menu">
        <div class="dropdown-item dropdown-input">
            <label>
                <div class="input-group">
                    <input type="text" class="form-control no-index" placeholder="{{ __('common.search') }}" data-url="{{ $url }}" data-limit="{{ $limit ?? 50 }}" data-target="{{ $name }}" data-insert="{{ $insert }}" data-display={{ $display }} @isset($by) data-by="{{ $by }}" @endisset>
                    <div class="input-group-append">
                        <button type="button" class="btn btn-outline-danger typeahead-clear"><i class="icon fas fa-times"></i></button>
                    </div>
                </div>
            </label>
        </div>
    </div>
</div>
