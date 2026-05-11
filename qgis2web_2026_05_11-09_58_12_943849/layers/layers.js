var wms_layers = [];


        var lyr_mapag_0 = new ol.layer.Tile({
            'title': 'mapag',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x=https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_poligonounido_1 = new ol.format.GeoJSON();
var features_poligonounido_1 = format_poligonounido_1.readFeatures(json_poligonounido_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligonounido_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligonounido_1.addFeatures(features_poligonounido_1);
var lyr_poligonounido_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligonounido_1, 
                style: style_poligonounido_1,
                popuplayertitle: 'poligonounido',
                interactive: true,
    title: 'poligonounido<br />\
    <img src="styles/legend/poligonounido_1_0.png" /> 20 DE NOVIEMBRE<br />\
    <img src="styles/legend/poligonounido_1_1.png" /> AMPLIACION SAN ISIDRO<br />\
    <img src="styles/legend/poligonounido_1_2.png" /> AZTECAS<br />\
    <img src="styles/legend/poligonounido_1_3.png" /> BALCONES DE COSTA AZUL<br />\
    <img src="styles/legend/poligonounido_1_4.png" /> BARRA VIEJA<br />\
    <img src="styles/legend/poligonounido_1_5.png" /> BARRANCA DE LA LAJA<br />\
    <img src="styles/legend/poligonounido_1_6.png" /> BEJUCO<br />\
    <img src="styles/legend/poligonounido_1_7.png" /> BONFIL<br />\
    <img src="styles/legend/poligonounido_1_8.png" /> BRISAMAR<br />\
    <img src="styles/legend/poligonounido_1_9.png" /> BRISAS GUITARRON<br />\
    <img src="styles/legend/poligonounido_1_10.png" /> BUROCRATAS<br />\
    <img src="styles/legend/poligonounido_1_11.png" /> CALETA<br />\
    <img src="styles/legend/poligonounido_1_12.png" /> CARABALI<br />\
    <img src="styles/legend/poligonounido_1_13.png" /> CAYACO<br />\
    <img src="styles/legend/poligonounido_1_14.png" /> CHINAMECA<br />\
    <img src="styles/legend/poligonounido_1_15.png" /> COLOSIO 1<br />\
    <img src="styles/legend/poligonounido_1_16.png" /> COLOSIO 2<br />\
    <img src="styles/legend/poligonounido_1_17.png" /> COLOSO NORTE<br />\
    <img src="styles/legend/poligonounido_1_18.png" /> COLOSO SUR<br />\
    <img src="styles/legend/poligonounido_1_19.png" /> CONDESA<br />\
    <img src="styles/legend/poligonounido_1_20.png" /> CONSTITUYENTES<br />\
    <img src="styles/legend/poligonounido_1_21.png" /> COSTA AZUL<br />\
    <img src="styles/legend/poligonounido_1_22.png" /> COSTERA CONVENCIONES-BASE<br />\
    <img src="styles/legend/poligonounido_1_23.png" /> COSTERA DIANA-CONVENCIONES<br />\
    <img src="styles/legend/poligonounido_1_24.png" /> COSTERA EDIFICIO INTELIGENTE-PARQUE PAPAGAYO<br />\
    <img src="styles/legend/poligonounido_1_25.png" /> COSTERA PALMAS<br />\
    <img src="styles/legend/poligonounido_1_26.png" /> CUAHUTEMOC NORTE<br />\
    <img src="styles/legend/poligonounido_1_27.png" /> CUAHUTEMOC SUR<br />\
    <img src="styles/legend/poligonounido_1_28.png" /> CUMBRES DE FIGUEROA<br />\
    <img src="styles/legend/poligonounido_1_29.png" /> CUMBRES DE LLANO LARGO<br />\
    <img src="styles/legend/poligonounido_1_30.png" /> DEL VALLE<br />\
    <img src="styles/legend/poligonounido_1_31.png" /> DERRUMBE<br />\
    <img src="styles/legend/poligonounido_1_32.png" /> EXCAMPO DE TIRO<br />\
    <img src="styles/legend/poligonounido_1_33.png" /> FLORIDA<br />\
    <img src="styles/legend/poligonounido_1_34.png" /> FOVISSTE<br />\
    <img src="styles/legend/poligonounido_1_35.png" /> FOVISSTE 2<br />\
    <img src="styles/legend/poligonounido_1_36.png" /> FOVISSTE 3<br />\
    <img src="styles/legend/poligonounido_1_37.png" /> FRAC. JOYAS DE BRISAMAR 2<br />\
    <img src="styles/legend/poligonounido_1_38.png" /> FRANCISCO VILLA<br />\
    <img src="styles/legend/poligonounido_1_39.png" /> FUERZA AEREA<br />\
    <img src="styles/legend/poligonounido_1_40.png" /> GLORIETA PUERTO MARQUEZ<br />\
    <img src="styles/legend/poligonounido_1_41.png" /> GUERRERO PRIMERO<br />\
    <img src="styles/legend/poligonounido_1_42.png" /> HOGAR MODERNO<br />\
    <img src="styles/legend/poligonounido_1_43.png" /> HORNOS INSURGENTES<br />\
    <img src="styles/legend/poligonounido_1_44.png" /> ICACOS<br />\
    <img src="styles/legend/poligonounido_1_45.png" /> INALAMBRICA<br />\
    <img src="styles/legend/poligonounido_1_46.png" /> INFONAVIT<br />\
    <img src="styles/legend/poligonounido_1_47.png" /> JARDIN MANGOS<br />\
    <img src="styles/legend/poligonounido_1_48.png" /> JARDIN PALMAS<br />\
    <img src="styles/legend/poligonounido_1_49.png" /> JOYAS DE BRISAMAR<br />\
    <img src="styles/legend/poligonounido_1_50.png" /> LA CAÑADA<br />\
    <img src="styles/legend/poligonounido_1_51.png" /> LA CIMA<br />\
    <img src="styles/legend/poligonounido_1_52.png" /> LA LAJA<br />\
    <img src="styles/legend/poligonounido_1_53.png" /> LA LIMA<br />\
    <img src="styles/legend/poligonounido_1_54.png" /> LA MIRA<br />\
    <img src="styles/legend/poligonounido_1_55.png" /> LA TOLVA<br />\
    <img src="styles/legend/poligonounido_1_56.png" /> LAS PLAYAS<br />\
    <img src="styles/legend/poligonounido_1_57.png" /> LAS POZAS<br />\
    <img src="styles/legend/poligonounido_1_58.png" /> LAZARO CARDENAS<br />\
    <img src="styles/legend/poligonounido_1_59.png" /> LLANO LARGO<br />\
    <img src="styles/legend/poligonounido_1_60.png" /> LOMA LARGA<br />\
    <img src="styles/legend/poligonounido_1_61.png" /> LOMAS DE CHAPULTEPEC<br />\
    <img src="styles/legend/poligonounido_1_62.png" /> LOMAS DEL MAR<br />\
    <img src="styles/legend/poligonounido_1_63.png" /> MAGALLANES<br />\
    <img src="styles/legend/poligonounido_1_64.png" /> MARROQUIN<br />\
    <img src="styles/legend/poligonounido_1_65.png" /> MERCADO CENTRAL<br />\
    <img src="styles/legend/poligonounido_1_66.png" /> MIRAMAR<br />\
    <img src="styles/legend/poligonounido_1_67.png" /> MORELOS<br />\
    <img src="styles/legend/poligonounido_1_68.png" /> PALOMARES<br />\
    <img src="styles/legend/poligonounido_1_69.png" /> PARQUE ICACOS MEDIDO<br />\
    <img src="styles/legend/poligonounido_1_70.png" /> PETAQUILLAS<br />\
    <img src="styles/legend/poligonounido_1_71.png" /> PIE DE LA CUESTA<br />\
    <img src="styles/legend/poligonounido_1_72.png" /> PL1<br />\
    <img src="styles/legend/poligonounido_1_73.png" /> PL2<br />\
    <img src="styles/legend/poligonounido_1_74.png" /> PL3<br />\
    <img src="styles/legend/poligonounido_1_75.png" /> PL4<br />\
    <img src="styles/legend/poligonounido_1_76.png" /> PL5<br />\
    <img src="styles/legend/poligonounido_1_77.png" /> PL6<br />\
    <img src="styles/legend/poligonounido_1_78.png" /> PL7<br />\
    <img src="styles/legend/poligonounido_1_79.png" /> PRADERAS<br />\
    <img src="styles/legend/poligonounido_1_80.png" /> PRIMERO DE MAYO<br />\
    <img src="styles/legend/poligonounido_1_81.png" /> PROGRESO NORTE<br />\
    <img src="styles/legend/poligonounido_1_82.png" /> PROGRESO SUR<br />\
    <img src="styles/legend/poligonounido_1_83.png" /> PUERTO MARQUEZ<br />\
    <img src="styles/legend/poligonounido_1_84.png" /> QUEBRADA<br />\
    <img src="styles/legend/poligonounido_1_85.png" /> QUEBRADORA<br />\
    <img src="styles/legend/poligonounido_1_86.png" /> REAL DIAMANTE<br />\
    <img src="styles/legend/poligonounido_1_87.png" /> ROBLE<br />\
    <img src="styles/legend/poligonounido_1_88.png" /> RODRIGO DE TRIANA<br />\
    <img src="styles/legend/poligonounido_1_89.png" /> TRES PALOS<br />\
    <img src="styles/legend/poligonounido_1_90.png" /> URDANETA<br />\
    <img src="styles/legend/poligonounido_1_91.png" /> VICTORIA<br />\
    <img src="styles/legend/poligonounido_1_92.png" /> VISTA ALEGRE<br />\
    <img src="styles/legend/poligonounido_1_93.png" /> VISTA BRISA<br />\
    <img src="styles/legend/poligonounido_1_94.png" /> VISTA HERMOSA<br />\
    <img src="styles/legend/poligonounido_1_95.png" /> <br />' });
var format_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2 = new ol.format.GeoJSON();
var features_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2 = format_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2.readFeatures(json_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2.addFeatures(features_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2);
var lyr_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2, 
                style: style_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2,
                popuplayertitle: 'aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10',
                interactive: true,
                title: '<img src="styles/legend/aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2.png" /> aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10'
            });
var format_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3 = new ol.format.GeoJSON();
var features_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3 = format_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3.readFeatures(json_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3.addFeatures(features_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3);
var lyr_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3, 
                style: style_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3,
                popuplayertitle: 'a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53',
                interactive: true,
                title: '<img src="styles/legend/a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3.png" /> a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53'
            });
var format_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4 = new ol.format.GeoJSON();
var features_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4 = format_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4.readFeatures(json_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4.addFeatures(features_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4);
var lyr_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4, 
                style: style_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4,
                popuplayertitle: 'aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04',
                interactive: true,
                title: '<img src="styles/legend/aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4.png" /> aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04'
            });
var format_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5 = new ol.format.GeoJSON();
var features_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5 = format_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5.readFeatures(json_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5.addFeatures(features_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5);
var lyr_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5, 
                style: style_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5,
                popuplayertitle: 'aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21',
                interactive: true,
                title: '<img src="styles/legend/aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5.png" /> aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21'
            });
var group_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21 = new ol.layer.Group({
                                layers: [lyr_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5,],
                                fold: 'open',
                                title: 'aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21'});
var group_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04 = new ol.layer.Group({
                                layers: [lyr_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4,],
                                fold: 'open',
                                title: 'aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04'});
var group_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53 = new ol.layer.Group({
                                layers: [lyr_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3,],
                                fold: 'open',
                                title: 'a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53'});
var group_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10 = new ol.layer.Group({
                                layers: [lyr_poligonounido_1,lyr_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2,],
                                fold: 'open',
                                title: 'aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10'});

lyr_mapag_0.setVisible(true);lyr_poligonounido_1.setVisible(true);lyr_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2.setVisible(true);lyr_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3.setVisible(true);lyr_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4.setVisible(true);lyr_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5.setVisible(true);
var layersList = [lyr_mapag_0,group_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10,group_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53,group_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04,group_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21];
lyr_poligonounido_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_poligonounido_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_poligonounido_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_aFVcrZGDBLACDp6LurB4GJ_2026_05_11_15_33_10_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_a3LefvdSntbGxVgNPC7uMW_2026_05_11_15_25_53_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_aC3xo926k5ToLyz4cDXFYr_2026_05_11_15_41_04_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_aPnx73k9JDFeDXPKJHWyFo_2026_05_11_15_38_21_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});