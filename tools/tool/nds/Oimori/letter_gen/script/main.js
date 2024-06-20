const ITEM_MAX = 15;
$(function() {
	/*Events*/
	for (let i = 1; i <= ITEM_MAX; i++) {
		CreateInputForm(i);
	}

    $("#mainform").submit(function() {
		$("#result").val(`${GetItemString()}${GetMoneyString()}`);
		return false;
	});

	$("#searchform").submit(function() {
		ExecuteSearch();
		return false;
	});

	$("#insertlist").click(function() {
		let id = $("#search_result").val();
		if (id) {AddToList(id);}
	});

	$("#converter").submit(function() {
		let m = parseInt($("#input_cnv").val(), parseInt($("[name=intype]:checked").val(), 10));
		if (isNaN(m)) { $("#output_cnv").val("error"); }
		$("#output_cnv").val(ConvertByteToString(m, 4));
		return false;
	});

	$('input[name=intype]').change(function() {
		if ($('input[name=intype]:checked').val() === '10') {
			$("#input_cnv").attr('type', 'number');
			$("#input_cnv").attr('min', '0');
			if ($("#input_cnv").attr('pattern')) {$("#input_cnv").removeAttr('pattern')}
		} else if ($('input[name=intype]:checked').val() === '16') {
			$("#input_cnv").attr('type', 'text');
			$("#input_cnv").attr('pattern', '^([a-f,A-F,0-9]|\[NUL [0-9]+\])+$');
			if ($("#input_cnv").attr('min')) {$("#input_cnv").removeAttr('min')}
		}
	});
});

function CreateInputForm(no){
	$("#itemlist").append(`<label for=\"item${no}\">道具${ ('00'+no).slice(-2) }</label><select id=\"item${no}\"></select><br>`);
	$(`#item${no}`).append('<option value="0">なし</option>');
	for (let i = 0; i < itemset.length; i++){
		let gname = 'list' + no + 'group' + i;
		$(`#item${no}`).append(`<optgroup label=\"${itemset[i].groupname}\" id=\"${gname}\"></optgroup>`);
		for (let j = 0; j < itemset[i].items.length; j++){
			$(`#${gname}`).append(`<option value=\"${itemset[i].items[j].id}\">${itemset[i].items[j].name}</option>`);
		}
	}
}

function GetItemString() {
	let temp = "";
	for (let i = 1; i <= ITEM_MAX; i++) {
		let m = parseInt($("#item" + i).val(), 10);
		if (isNaN(m)) { temp += `[道具${i}の変換に失敗]`;console.error(`道具${i}の変換に失敗`); }
		else { temp += ConvertByteToString(m, 2); }
	}
	return temp;
}

function GetMoneyString() {
	let m = parseInt(`${$("#money").val()}`, 10);
	if (isNaN(m)) { return "[所持金の変換に失敗]"; }
	return ConvertByteToString(m, 4);
}

function ConvertByteToString(input, size) {
	let temp = "";
	for (let i = 0; i < size; i++) {
		temp += charset[(input >> (i * 8)) & 0xFF];
	}
	return temp;
}

function SearchNextUnselected() {
	try {
		for (let i = 1; i <= ITEM_MAX; i++) {
			if ($(`#item${i}`).val() == 0) {
				return i;
			}
		}
	} catch (error) {
		console.error(`${error}`);
		return -1;
	}
}

function ExecuteSearch() {
	$("#search_result").html("");
	let needle = $("#search").val();
	for (let i = 0; i < itemset.length; i++) {
		for (let j = 0; j < itemset[i].items.length; j++) {
			if (itemset[i].items[j].name.indexOf(needle) != -1) {
				$("#search_result").append(`<option value=\"${itemset[i].items[j].id}\" id=\"sr${itemset[i].items[j].id}\">${itemset[i].items[j].name}</option>`);
				$(`#sr${itemset[i].items[j].id}`).dblclick((function (id) { return function() { AddToList(id); } })(itemset[i].items[j].id));
			}
		}
	}
	return false;
}

function AddToList(id) {
	let nextspace = SearchNextUnselected();
	if (nextspace != -1) {
		$(`#item${nextspace}`).val(id);
	}
}
