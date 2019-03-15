<div class="dropdown bs-select multiple-select{{ ($sm ?? false) ? ' bs-select-sm' : '' }}">
    <button class="main-button form-control{{ ($sm ?? false) ? ' form-control-sm' : '' }}" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{ $slot }}
    </button>
    <div class="dropdown-menu">
        @isset($items[0]['group'])
            @foreach ($items as $g)
                <div class="dropdown-item dropdown-group">
                    <label data-group="{{ $g['group'] }}">{{ $g['label'] }}</label>
                </div>
                @foreach ($g['items'] as $i)
                    @php
                        $checked = (isset($model) && !empty($model)) ? ($i['value'] == ($model[$i['name']]['value'] ?? '') ? 'checked' : '') : '';

                        if (old($i['name'], null) == $i['value']) $checked = 'checked';
                    @endphp
                    <div class="dropdown-item">
                        <label>
                            <input {{ $checked }} @isset($conjunction) data-conjunction="{{ $conjunction }}" @endisset class="form-check-input" type="checkbox" name="{{ $i['name'] }}" value="{{ $i['value'] }}" data-group="{{ $g['group'] }}" data-unique="{{ ($g['unique'] ?? false) ? "1" : "0" }}">
                            <i class="icon fas fa-check"></i>
                            {{ $i['label'] }}
                        </label>
                    </div>
                @endforeach
            @endforeach
        @else
            @foreach ($items as $i)
                @php
                    $checked = '';

                    if (old($i['name'], null) == $i['value']) $checked = 'checked';
                @endphp

                <div class="dropdown-item">
                    <label>
                        <input {{ $checked }} @isset($conjunction) data-conjunction="{{ $conjunction }}" @endisset class="form-check-input" type="checkbox" name="{{ $i['name'] }}" value="{{ $i['value'] }}" data-unique="0">
                        <i class="icon fas fa-check"></i>
                        {{ $i['label'] }}
                    </label>
                </div>
            @endforeach
        @endisset
    </div>
</div>