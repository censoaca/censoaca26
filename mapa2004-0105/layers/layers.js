var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_POLIGONOSACAPULCORENACIMIENTOSUR_1 = new ol.format.GeoJSON();
var features_POLIGONOSACAPULCORENACIMIENTOSUR_1 = format_POLIGONOSACAPULCORENACIMIENTOSUR_1.readFeatures(json_POLIGONOSACAPULCORENACIMIENTOSUR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONOSACAPULCORENACIMIENTOSUR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONOSACAPULCORENACIMIENTOSUR_1.addFeatures(features_POLIGONOSACAPULCORENACIMIENTOSUR_1);
var lyr_POLIGONOSACAPULCORENACIMIENTOSUR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGONOSACAPULCORENACIMIENTOSUR_1, 
                style: style_POLIGONOSACAPULCORENACIMIENTOSUR_1,
                popuplayertitle: 'POLIGONOS ACAPULCO — RENACIMIENTO SUR',
                interactive: true,
                title: 'POLIGONOS ACAPULCO — RENACIMIENTO SUR'
            });
var format_POLIGONOSACAPULCORENANORTE_2 = new ol.format.GeoJSON();
var features_POLIGONOSACAPULCORENANORTE_2 = format_POLIGONOSACAPULCORENANORTE_2.readFeatures(json_POLIGONOSACAPULCORENANORTE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONOSACAPULCORENANORTE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONOSACAPULCORENANORTE_2.addFeatures(features_POLIGONOSACAPULCORENANORTE_2);
var lyr_POLIGONOSACAPULCORENANORTE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGONOSACAPULCORENANORTE_2, 
                style: style_POLIGONOSACAPULCORENANORTE_2,
                popuplayertitle: 'POLIGONOS ACAPULCO — RENA NORTE',
                interactive: true,
                title: 'POLIGONOS ACAPULCO — RENA NORTE'
            });
var format_POLIGONOSACAPULCOGARITA_3 = new ol.format.GeoJSON();
var features_POLIGONOSACAPULCOGARITA_3 = format_POLIGONOSACAPULCOGARITA_3.readFeatures(json_POLIGONOSACAPULCOGARITA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONOSACAPULCOGARITA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONOSACAPULCOGARITA_3.addFeatures(features_POLIGONOSACAPULCOGARITA_3);
var lyr_POLIGONOSACAPULCOGARITA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGONOSACAPULCOGARITA_3, 
                style: style_POLIGONOSACAPULCOGARITA_3,
                popuplayertitle: 'POLIGONOS ACAPULCO — GARITA',
                interactive: true,
                title: 'POLIGONOS ACAPULCO — GARITA'
            });
var format_POLIGONOSACAPULCOEJIDO_4 = new ol.format.GeoJSON();
var features_POLIGONOSACAPULCOEJIDO_4 = format_POLIGONOSACAPULCOEJIDO_4.readFeatures(json_POLIGONOSACAPULCOEJIDO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONOSACAPULCOEJIDO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONOSACAPULCOEJIDO_4.addFeatures(features_POLIGONOSACAPULCOEJIDO_4);
var lyr_POLIGONOSACAPULCOEJIDO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGONOSACAPULCOEJIDO_4, 
                style: style_POLIGONOSACAPULCOEJIDO_4,
                popuplayertitle: 'POLIGONOS ACAPULCO — EJIDO',
                interactive: true,
                title: 'POLIGONOS ACAPULCO — EJIDO'
            });
var format_POLIGONOSACAPULCODIAMANTE_5 = new ol.format.GeoJSON();
var features_POLIGONOSACAPULCODIAMANTE_5 = format_POLIGONOSACAPULCODIAMANTE_5.readFeatures(json_POLIGONOSACAPULCODIAMANTE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONOSACAPULCODIAMANTE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONOSACAPULCODIAMANTE_5.addFeatures(features_POLIGONOSACAPULCODIAMANTE_5);
var lyr_POLIGONOSACAPULCODIAMANTE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGONOSACAPULCODIAMANTE_5, 
                style: style_POLIGONOSACAPULCODIAMANTE_5,
                popuplayertitle: 'POLIGONOS ACAPULCO — DIAMANTE',
                interactive: true,
                title: 'POLIGONOS ACAPULCO — DIAMANTE'
            });
var format_POLIGONOSACAPULCOCUAHUTEMOC_6 = new ol.format.GeoJSON();
var features_POLIGONOSACAPULCOCUAHUTEMOC_6 = format_POLIGONOSACAPULCOCUAHUTEMOC_6.readFeatures(json_POLIGONOSACAPULCOCUAHUTEMOC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONOSACAPULCOCUAHUTEMOC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONOSACAPULCOCUAHUTEMOC_6.addFeatures(features_POLIGONOSACAPULCOCUAHUTEMOC_6);
var lyr_POLIGONOSACAPULCOCUAHUTEMOC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGONOSACAPULCOCUAHUTEMOC_6, 
                style: style_POLIGONOSACAPULCOCUAHUTEMOC_6,
                popuplayertitle: 'POLIGONOS ACAPULCO — CUAHUTEMOC',
                interactive: true,
                title: 'POLIGONOS ACAPULCO — CUAHUTEMOC'
            });
var format_POLIGONOSACAPULCOCOSTAAZUL_7 = new ol.format.GeoJSON();
var features_POLIGONOSACAPULCOCOSTAAZUL_7 = format_POLIGONOSACAPULCOCOSTAAZUL_7.readFeatures(json_POLIGONOSACAPULCOCOSTAAZUL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONOSACAPULCOCOSTAAZUL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONOSACAPULCOCOSTAAZUL_7.addFeatures(features_POLIGONOSACAPULCOCOSTAAZUL_7);
var lyr_POLIGONOSACAPULCOCOSTAAZUL_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGONOSACAPULCOCOSTAAZUL_7, 
                style: style_POLIGONOSACAPULCOCOSTAAZUL_7,
                popuplayertitle: 'POLIGONOS ACAPULCO — COSTA AZUL',
                interactive: false,
                title: 'POLIGONOS ACAPULCO — COSTA AZUL'
            });
var format_poligonounido_8 = new ol.format.GeoJSON();
var features_poligonounido_8 = format_poligonounido_8.readFeatures(json_poligonounido_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligonounido_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligonounido_8.addFeatures(features_poligonounido_8);
var lyr_poligonounido_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligonounido_8, 
                style: style_poligonounido_8,
                popuplayertitle: 'poligonounido',
                interactive: true,
    title: 'poligonounido<br />\
    <img src="styles/legend/poligonounido_8_0.png" /> 20 DE NOVIEMBRE<br />\
    <img src="styles/legend/poligonounido_8_1.png" /> AMPLIACION SAN ISIDRO<br />\
    <img src="styles/legend/poligonounido_8_2.png" /> AZTECAS<br />\
    <img src="styles/legend/poligonounido_8_3.png" /> BALCONES DE COSTA AZUL<br />\
    <img src="styles/legend/poligonounido_8_4.png" /> BARRA VIEJA<br />\
    <img src="styles/legend/poligonounido_8_5.png" /> BARRANCA DE LA LAJA<br />\
    <img src="styles/legend/poligonounido_8_6.png" /> BEJUCO<br />\
    <img src="styles/legend/poligonounido_8_7.png" /> BONFIL<br />\
    <img src="styles/legend/poligonounido_8_8.png" /> BRISAMAR<br />\
    <img src="styles/legend/poligonounido_8_9.png" /> BRISAS GUITARRON<br />\
    <img src="styles/legend/poligonounido_8_10.png" /> BUROCRATAS<br />\
    <img src="styles/legend/poligonounido_8_11.png" /> CALETA<br />\
    <img src="styles/legend/poligonounido_8_12.png" /> CARABALI<br />\
    <img src="styles/legend/poligonounido_8_13.png" /> CAYACO<br />\
    <img src="styles/legend/poligonounido_8_14.png" /> CHINAMECA<br />\
    <img src="styles/legend/poligonounido_8_15.png" /> COLOSIO 1<br />\
    <img src="styles/legend/poligonounido_8_16.png" /> COLOSIO 2<br />\
    <img src="styles/legend/poligonounido_8_17.png" /> COLOSO NORTE<br />\
    <img src="styles/legend/poligonounido_8_18.png" /> COLOSO SUR<br />\
    <img src="styles/legend/poligonounido_8_19.png" /> CONDESA<br />\
    <img src="styles/legend/poligonounido_8_20.png" /> CONSTITUYENTES<br />\
    <img src="styles/legend/poligonounido_8_21.png" /> COSTA AZUL<br />\
    <img src="styles/legend/poligonounido_8_22.png" /> COSTERA CONVENCIONES-BASE<br />\
    <img src="styles/legend/poligonounido_8_23.png" /> COSTERA DIANA-CONVENCIONES<br />\
    <img src="styles/legend/poligonounido_8_24.png" /> COSTERA EDIFICIO INTELIGENTE-PARQUE PAPAGAYO<br />\
    <img src="styles/legend/poligonounido_8_25.png" /> COSTERA PALMAS<br />\
    <img src="styles/legend/poligonounido_8_26.png" /> CUAHUTEMOC NORTE<br />\
    <img src="styles/legend/poligonounido_8_27.png" /> CUAHUTEMOC SUR<br />\
    <img src="styles/legend/poligonounido_8_28.png" /> CUMBRES DE FIGUEROA<br />\
    <img src="styles/legend/poligonounido_8_29.png" /> CUMBRES DE LLANO LARGO<br />\
    <img src="styles/legend/poligonounido_8_30.png" /> DEL VALLE<br />\
    <img src="styles/legend/poligonounido_8_31.png" /> DERRUMBE<br />\
    <img src="styles/legend/poligonounido_8_32.png" /> EXCAMPO DE TIRO<br />\
    <img src="styles/legend/poligonounido_8_33.png" /> FLORIDA<br />\
    <img src="styles/legend/poligonounido_8_34.png" /> FOVISSTE<br />\
    <img src="styles/legend/poligonounido_8_35.png" /> FOVISSTE 2<br />\
    <img src="styles/legend/poligonounido_8_36.png" /> FOVISSTE 3<br />\
    <img src="styles/legend/poligonounido_8_37.png" /> FRAC. JOYAS DE BRISAMAR 2<br />\
    <img src="styles/legend/poligonounido_8_38.png" /> FRANCISCO VILLA<br />\
    <img src="styles/legend/poligonounido_8_39.png" /> FUERZA AEREA<br />\
    <img src="styles/legend/poligonounido_8_40.png" /> GLORIETA PUERTO MARQUEZ<br />\
    <img src="styles/legend/poligonounido_8_41.png" /> GUERRERO PRIMERO<br />\
    <img src="styles/legend/poligonounido_8_42.png" /> HOGAR MODERNO<br />\
    <img src="styles/legend/poligonounido_8_43.png" /> HORNOS INSURGENTES<br />\
    <img src="styles/legend/poligonounido_8_44.png" /> ICACOS<br />\
    <img src="styles/legend/poligonounido_8_45.png" /> INALAMBRICA<br />\
    <img src="styles/legend/poligonounido_8_46.png" /> INFONAVIT<br />\
    <img src="styles/legend/poligonounido_8_47.png" /> JARDIN MANGOS<br />\
    <img src="styles/legend/poligonounido_8_48.png" /> JARDIN PALMAS<br />\
    <img src="styles/legend/poligonounido_8_49.png" /> JOYAS DE BRISAMAR<br />\
    <img src="styles/legend/poligonounido_8_50.png" /> LA CAÑADA<br />\
    <img src="styles/legend/poligonounido_8_51.png" /> LA CIMA<br />\
    <img src="styles/legend/poligonounido_8_52.png" /> LA LAJA<br />\
    <img src="styles/legend/poligonounido_8_53.png" /> LA LIMA<br />\
    <img src="styles/legend/poligonounido_8_54.png" /> LA MIRA<br />\
    <img src="styles/legend/poligonounido_8_55.png" /> LA TOLVA<br />\
    <img src="styles/legend/poligonounido_8_56.png" /> LAS PLAYAS<br />\
    <img src="styles/legend/poligonounido_8_57.png" /> LAS POZAS<br />\
    <img src="styles/legend/poligonounido_8_58.png" /> LAZARO CARDENAS<br />\
    <img src="styles/legend/poligonounido_8_59.png" /> LLANO LARGO<br />\
    <img src="styles/legend/poligonounido_8_60.png" /> LOMA LARGA<br />\
    <img src="styles/legend/poligonounido_8_61.png" /> LOMAS DE CHAPULTEPEC<br />\
    <img src="styles/legend/poligonounido_8_62.png" /> LOMAS DEL MAR<br />\
    <img src="styles/legend/poligonounido_8_63.png" /> MAGALLANES<br />\
    <img src="styles/legend/poligonounido_8_64.png" /> MARROQUIN<br />\
    <img src="styles/legend/poligonounido_8_65.png" /> MERCADO CENTRAL<br />\
    <img src="styles/legend/poligonounido_8_66.png" /> MIRAMAR<br />\
    <img src="styles/legend/poligonounido_8_67.png" /> MORELOS<br />\
    <img src="styles/legend/poligonounido_8_68.png" /> PALOMARES<br />\
    <img src="styles/legend/poligonounido_8_69.png" /> PARQUE ICACOS MEDIDO<br />\
    <img src="styles/legend/poligonounido_8_70.png" /> PETAQUILLAS<br />\
    <img src="styles/legend/poligonounido_8_71.png" /> PIE DE LA CUESTA<br />\
    <img src="styles/legend/poligonounido_8_72.png" /> PL1<br />\
    <img src="styles/legend/poligonounido_8_73.png" /> PL2<br />\
    <img src="styles/legend/poligonounido_8_74.png" /> PL3<br />\
    <img src="styles/legend/poligonounido_8_75.png" /> PL4<br />\
    <img src="styles/legend/poligonounido_8_76.png" /> PL5<br />\
    <img src="styles/legend/poligonounido_8_77.png" /> PL6<br />\
    <img src="styles/legend/poligonounido_8_78.png" /> PL7<br />\
    <img src="styles/legend/poligonounido_8_79.png" /> PRADERAS<br />\
    <img src="styles/legend/poligonounido_8_80.png" /> PRIMERO DE MAYO<br />\
    <img src="styles/legend/poligonounido_8_81.png" /> PROGRESO NORTE<br />\
    <img src="styles/legend/poligonounido_8_82.png" /> PROGRESO SUR<br />\
    <img src="styles/legend/poligonounido_8_83.png" /> PUERTO MARQUEZ<br />\
    <img src="styles/legend/poligonounido_8_84.png" /> QUEBRADA<br />\
    <img src="styles/legend/poligonounido_8_85.png" /> QUEBRADORA<br />\
    <img src="styles/legend/poligonounido_8_86.png" /> REAL DIAMANTE<br />\
    <img src="styles/legend/poligonounido_8_87.png" /> ROBLE<br />\
    <img src="styles/legend/poligonounido_8_88.png" /> RODRIGO DE TRIANA<br />\
    <img src="styles/legend/poligonounido_8_89.png" /> TRES PALOS<br />\
    <img src="styles/legend/poligonounido_8_90.png" /> URDANETA<br />\
    <img src="styles/legend/poligonounido_8_91.png" /> VICTORIA<br />\
    <img src="styles/legend/poligonounido_8_92.png" /> VISTA ALEGRE<br />\
    <img src="styles/legend/poligonounido_8_93.png" /> VISTA BRISA<br />\
    <img src="styles/legend/poligonounido_8_94.png" /> VISTA HERMOSA<br />\
    <img src="styles/legend/poligonounido_8_95.png" /> <br />' });
var format_sabanacuadrillam20040105_9 = new ol.format.GeoJSON();
var features_sabanacuadrillam20040105_9 = format_sabanacuadrillam20040105_9.readFeatures(json_sabanacuadrillam20040105_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sabanacuadrillam20040105_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sabanacuadrillam20040105_9.addFeatures(features_sabanacuadrillam20040105_9);
var lyr_sabanacuadrillam20040105_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sabanacuadrillam20040105_9, 
                style: style_sabanacuadrillam20040105_9,
                popuplayertitle: 'sabana cuadrillam2004-0105',
                interactive: true,
    title: 'sabana cuadrillam2004-0105<br />\
    <img src="styles/legend/sabanacuadrillam20040105_9_0.png" /> 24 HRS<br />\
    <img src="styles/legend/sabanacuadrillam20040105_9_1.png" /> FUNDIDA/SIN LAMPARA<br />\
    <img src="styles/legend/sabanacuadrillam20040105_9_2.png" /> NORMAL<br />\
    <img src="styles/legend/sabanacuadrillam20040105_9_3.png" /> OTRO<br />\
    <img src="styles/legend/sabanacuadrillam20040105_9_4.png" /> PARA REPARAR<br />\
    <img src="styles/legend/sabanacuadrillam20040105_9_5.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_POLIGONOSACAPULCORENACIMIENTOSUR_1.setVisible(true);lyr_POLIGONOSACAPULCORENANORTE_2.setVisible(true);lyr_POLIGONOSACAPULCOGARITA_3.setVisible(true);lyr_POLIGONOSACAPULCOEJIDO_4.setVisible(true);lyr_POLIGONOSACAPULCODIAMANTE_5.setVisible(true);lyr_POLIGONOSACAPULCOCUAHUTEMOC_6.setVisible(true);lyr_POLIGONOSACAPULCOCOSTAAZUL_7.setVisible(true);lyr_poligonounido_8.setVisible(true);lyr_sabanacuadrillam20040105_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_POLIGONOSACAPULCORENACIMIENTOSUR_1,lyr_POLIGONOSACAPULCORENANORTE_2,lyr_POLIGONOSACAPULCOGARITA_3,lyr_POLIGONOSACAPULCOEJIDO_4,lyr_POLIGONOSACAPULCODIAMANTE_5,lyr_POLIGONOSACAPULCOCUAHUTEMOC_6,lyr_POLIGONOSACAPULCOCOSTAAZUL_7,lyr_poligonounido_8,lyr_sabanacuadrillam20040105_9];
lyr_POLIGONOSACAPULCORENACIMIENTOSUR_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLIGONOSACAPULCORENANORTE_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLIGONOSACAPULCOGARITA_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLIGONOSACAPULCOEJIDO_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLIGONOSACAPULCODIAMANTE_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLIGONOSACAPULCOCUAHUTEMOC_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLIGONOSACAPULCOCOSTAAZUL_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_poligonounido_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_sabanacuadrillam20040105_9.set('fieldAliases', {'start': 'start', 'end': 'end', 'today': 'today', 'deviceid': 'deviceid', 'last-saved': 'last-saved', 'UBICACIÓN': 'UBICACIÓN', '_UBICACIÓN_latitude': '_UBICACIÓN_latitude', '_UBICACIÓN_longitude': '_UBICACIÓN_longitude', '_UBICACIÓN_altitude': '_UBICACIÓN_altitude', '_UBICACIÓN_precision': '_UBICACIÓN_precision', 'POSTE': 'POSTE', 'TOMAR FOTO': 'TOMAR FOTO', 'TOMAR FOTO_URL': 'TOMAR FOTO_URL', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_validation_status': '_validation_status', '_notes': '_notes', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', 'meta/rootUuid': 'meta/rootUuid', '_index': '_index', 'TIPO DE LUMINARIA': 'TIPO DE LUMINARIA', 'CAPACIDAD': 'CAPACIDAD', 'CANTIDAD': 'CANTIDAD', 'ESTADO': 'ESTADO', 'NOTA': 'NOTA', '_index.1': '_index.1', '_parent_table_name': '_parent_table_name', '_parent_index': '_parent_index', '_submission__id': '_submission__id', '_submission__uuid': '_submission__uuid', '_submission__submission_time': '_submission__submission_time', '_submission__validation_status': '_submission__validation_status', '_submission__notes': '_submission__notes', '_submission__status': '_submission__status', '_submission__submitted_by': '_submission__submitted_by', '_submission___version__': '_submission___version__', '_submission__tags': '_submission__tags', '_submission_meta/rootUuid': '_submission_meta/rootUuid', });
lyr_POLIGONOSACAPULCORENACIMIENTOSUR_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_POLIGONOSACAPULCORENANORTE_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_POLIGONOSACAPULCOGARITA_3.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_POLIGONOSACAPULCOEJIDO_4.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_POLIGONOSACAPULCODIAMANTE_5.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_POLIGONOSACAPULCOCUAHUTEMOC_6.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_POLIGONOSACAPULCOCOSTAAZUL_7.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_poligonounido_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_sabanacuadrillam20040105_9.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'today': 'TextEdit', 'deviceid': 'TextEdit', 'last-saved': 'CheckBox', 'UBICACIÓN': 'TextEdit', '_UBICACIÓN_latitude': 'TextEdit', '_UBICACIÓN_longitude': 'TextEdit', '_UBICACIÓN_altitude': 'TextEdit', '_UBICACIÓN_precision': 'TextEdit', 'POSTE': 'TextEdit', 'TOMAR FOTO': 'TextEdit', 'TOMAR FOTO_URL': 'TextEdit', '_id': 'Range', '_uuid': 'TextEdit', '_submission_time': 'TextEdit', '_validation_status': 'TextEdit', '_notes': 'TextEdit', '_status': 'TextEdit', '_submitted_by': 'TextEdit', '__version__': 'TextEdit', '_tags': 'TextEdit', 'meta/rootUuid': 'TextEdit', '_index': 'Range', 'TIPO DE LUMINARIA': 'TextEdit', 'CAPACIDAD': 'Range', 'CANTIDAD': 'Range', 'ESTADO': 'TextEdit', 'NOTA': 'TextEdit', '_index.1': 'Range', '_parent_table_name': 'TextEdit', '_parent_index': 'Range', '_submission__id': 'Range', '_submission__uuid': 'TextEdit', '_submission__submission_time': 'TextEdit', '_submission__validation_status': 'TextEdit', '_submission__notes': 'TextEdit', '_submission__status': 'TextEdit', '_submission__submitted_by': 'TextEdit', '_submission___version__': 'TextEdit', '_submission__tags': 'TextEdit', '_submission_meta/rootUuid': 'TextEdit', });
lyr_POLIGONOSACAPULCORENACIMIENTOSUR_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POLIGONOSACAPULCORENANORTE_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POLIGONOSACAPULCOGARITA_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POLIGONOSACAPULCOEJIDO_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POLIGONOSACAPULCODIAMANTE_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POLIGONOSACAPULCOCUAHUTEMOC_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POLIGONOSACAPULCOCOSTAAZUL_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_poligonounido_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_sabanacuadrillam20040105_9.set('fieldLabels', {'start': 'no label', 'end': 'header label - visible with data', 'today': 'header label - visible with data', 'deviceid': 'header label - visible with data', 'last-saved': 'no label', 'UBICACIÓN': 'no label', '_UBICACIÓN_latitude': 'no label', '_UBICACIÓN_longitude': 'no label', '_UBICACIÓN_altitude': 'no label', '_UBICACIÓN_precision': 'no label', 'POSTE': 'header label - visible with data', 'TOMAR FOTO': 'no label', 'TOMAR FOTO_URL': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_validation_status': 'no label', '_notes': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', 'meta/rootUuid': 'no label', '_index': 'no label', 'TIPO DE LUMINARIA': 'no label', 'CAPACIDAD': 'no label', 'CANTIDAD': 'no label', 'ESTADO': 'no label', 'NOTA': 'no label', '_index.1': 'no label', '_parent_table_name': 'no label', '_parent_index': 'no label', '_submission__id': 'no label', '_submission__uuid': 'no label', '_submission__submission_time': 'no label', '_submission__validation_status': 'no label', '_submission__notes': 'no label', '_submission__status': 'no label', '_submission__submitted_by': 'no label', '_submission___version__': 'no label', '_submission__tags': 'no label', '_submission_meta/rootUuid': 'no label', });
lyr_sabanacuadrillam20040105_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});