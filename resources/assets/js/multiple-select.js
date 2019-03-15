let selects = {};

function makeID(len) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

$('.bs-select').each(function() {
    let randID = 'bss-' + makeID(16);

    $(this).attr('id', randID);

    let btn = $(this).find('.main-button');

    selects[randID] = {
        button: btn,
        original: btn.text(),
    };

    msInit();
});

function msInit() {
    $('.multiple-select').on('click', '.dropdown-item', function(e) {
        e.stopPropagation();
    });

    $('.multiple-select').on('change', 'input', function(e) {
        if ($(this).data('unique') && $(this).prop('checked')) {
            $('[data-group="'+ $(this).data('group') +'"]').prop('checked', false);

            $(this).prop('checked', true);
        }

        let id = $(this).closest('.multiple-select').attr('id');

        let boxes = $(this).closest('.multiple-select').find('input[type=checkbox]');

        let count = $(this).closest('.multiple-select').find('input[type=checkbox]:checked').length;

        let grps = {};

        let selected = {
            groups: {},
            labels: [],
        };

        let index = 0;

        $(boxes).each(function() {
            let t = $(this);

            let g = grps[t.data('group')];

            if (typeof g === 'undefined') {
                g = {
                    count: 1,
                    unique: t.data('unique'),
                };
            } else {
                g.count += 1;
            }

            if (t.prop('checked')) {
                let gName = t.data('group');

                if (typeof gName !== 'undefined') {

                    if (typeof selected.groups[gName] === 'undefined') {
                        selected.groups[gName] = index;
                    }

                    index = selected.groups[gName];
                }

                if (typeof selected.labels[index] === 'undefined') selected.labels[index] = [];

                selected.labels[index].push(t.parent().text().trim());

                if (typeof gName !== 'undefined') index++;
            }

            grps[t.data('group')] = g;
        });

        boxes = 0;

        for (let i in grps) {
            if (grps[i].unique) {
                boxes += 1;
            } else {
                boxes += grps[i].count;
            }
        }

        if (count == 0) {
            selects[id].button.text(selects[id].original);
        } else if (count <= 3) {
            let print = [];

            for (let g in selected.groups) {
                print.push($(this).closest('.multiple-select').find('label[data-group="'+ g +'"]').text() +': '+ selected.labels[selected.groups[g]].join(', '));
            }

            if (!print.length) print.push(selected.labels[0].join(', '));

            selects[id].button.text(print.join(' / '));
        } else {
            selects[id].button.text(selects[id].original + ' ('+ count +'/'+ boxes +')');
        }
    });

    $('.typeahead').on('show.bs.dropdown', function (e) {
        let i = $(this).find('input.no-index');

        setTimeout(function() {
            if (!i.is('focus')) {
                i.get(0).focus(true);
            }
        }, 50);
    });

    $('.typeahead').on('click', '.dropdown-item:not(.dropdown-input)', function() {
        let l = $(this).find('label');
        let id = $(this).closest('.typeahead').attr('id');

        $('input[name="'+ l.data('target') +'"]').val(l.data('key'));

        selects[id].button.text(l.text());
    });
}

$('.typeahead-clear').on('click', function() {
    let parent = $(this).closest('.typeahead');
    let id = parent.attr('id');

    parent.find('input').val('');

    parent.find('.dropdown-item:not(.dropdown-input)').remove();

    selects[id].button.text(parent.find('.original').text());
});

$('.typeahead .dropdown-input input').on('input', function() {
    let url = $(this).data('url');
    let val = $(this).val();
    let limit = $(this).data('limit');
    let ins = $(this).data('insert');
    let dis = $(this).data('display');
    let elem = $(this).closest('.dropdown-input').parent();
    let tg = $(this).data('target');
    let by = $(this).data('by');

    if (val.length < 3) return;

    window.axios.get(url, {
        params: {
            q: val,
            limit: limit,
            by: by,
        }
    })
    .then(response => {
        elem.find('.dropdown-item:not(.dropdown-input)').remove();

        response.data.forEach(function(item) {
            let label;
            let lastCat;

            if (tg == 'category_id') {
                v = '';

                item.forEach(function(i) {
                    v += '/ ' + i.name + ' ';
                });

                k = item[item.length - 1].id;
            } else {
                v = item[dis];
                k = item[ins];
            }

            let nval = '<strong>'+ val +'</strong>';
            let reg = new RegExp(val, 'gi');

            v = v.replace(reg, nval);

            let tmp =
            '<div class="dropdown-item">'+
                '<label data-key="'+ k +'" data-target="'+ tg +'">' +
                    '+ v +'+
                '</label>'+
            '</div>';

            elem.append(tmp);
        });
    })
    .catch(error => {
        parseError(error);
    });
});

(function msCheck() {
    $('.multiple-select input').each(function() {
        if ($(this).data('unique') && $(this).prop('checked')) {
            $('[data-group="'+ $(this).data('group') +'"]').prop('checked', false);

            $(this).prop('checked', true);
        }

        let id = $(this).closest('.multiple-select').attr('id');

        let boxes = $(this).closest('.multiple-select').find('input[type=checkbox]');

        let count = $(this).closest('.multiple-select').find('input[type=checkbox]:checked').length;

        let grps = {};

        let selected = {
            groups: {},
            labels: [],
        };

        let index = 0;

        $(boxes).each(function() {
            let t = $(this);

            let g = grps[t.data('group')];

            if (typeof g === 'undefined') {
                g = {
                    count: 1,
                    unique: t.data('unique'),
                };
            } else {
                g.count += 1;
            }

            if (t.prop('checked')) {
                let gName = t.data('group');

                if (typeof gName !== 'undefined') {

                    if (typeof selected.groups[gName] === 'undefined') {
                        selected.groups[gName] = index;
                    }

                    index = selected.groups[gName];
                }

                if (typeof selected.labels[index] === 'undefined') selected.labels[index] = [];

                selected.labels[index].push(t.parent().text().trim());

                if (typeof gName !== 'undefined') index++;
            }

            grps[t.data('group')] = g;
        });

        boxes = 0;

        for (let i in grps) {
            if (grps[i].unique) {
                boxes += 1;
            } else {
                boxes += grps[i].count;
            }
        }

        if (count == 0) {
            selects[id].button.text(selects[id].original);
        } else if (count <= 3) {
            let print = [];

            for (let g in selected.groups) {
                print.push($('label[data-group="'+ g +'"]').text() +': '+ selected.labels[selected.groups[g]].join(', '));
            }

            if (!print.length) print.push(selected.labels[0].join(', '));

            selects[id].button.text(print.join(' / '));
        } else {
            selects[id].button.text(selects[id].original + ' ('+ count +'/'+ boxes +')');
        }
    });
})();

let lastKey;

document.addEventListener('keydown', e => {
    if (lastKey !== e.key) {
        lastKey = e.key;

        if (lastKey === 'Backspace') {
            $('.multiple-select.show').find('.dropdown-item:not(.dropdown-group)').each(function() {
                $(this).show();
            });

            return;
        }

        $('.multiple-select.show').find('.dropdown-item:not(.dropdown-group)').each(function() {
            $(this).hide();

            if ($(this).find('label').text().trim()[0].toLowerCase() === lastKey) {
                $(this).show();
            }
        });
    }        
});

$('.submit-immediate').on('change', 'input', function() {
    $(this).closest('form').submit();
});