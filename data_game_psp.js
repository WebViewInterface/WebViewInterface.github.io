//Array de Enlaces 
var nu = [
"https://www.freeroms.com/roms/psp/from_russia_with_love_-_007_europe.htm",
"https://www.freeroms.com/roms/psp/7_wonders_of_the_ancient_world_europe.htm", 
"https://www.freeroms.com/roms/psp/50_cent_-_bulletproof_-_g-unit_edition_europe.htm", 
"https://wowroms.com/es/isos/playstation-portable/download-101-in-1-megamix/32964.html", 
"https://www.freeroms.com/roms/psp/300_-_march_to_glory_europe.htm", 
"https://www.freeroms.com/roms/psp/2010_fifa_world_cup_south_africa_europe.htm", 
"https://www.freeroms.com/roms/psp/_hack-link_japan.htm", 
"https://www.freeroms.com/roms/psp/1_million_ton_no_barabara_japan.htm", 
"https://www.freeroms.com/roms/psp/11_eyes_crossover_japan.htm", 
"https://www.freeroms.com/roms/psp/12-ji_no_kane_to_cinderella_-_halloween_wedding_japan.htm",
"https://www.freeroms.com/roms/psp/12riven_-_the_psi-climinal_of_integral_japan.htm", 
"https://www.freeroms.com/roms/psp/3rd_birthday_the_europe.htm", 
"https://www.freeroms.com/roms/psp/428_-_fuusa_sareta_shibuya_de_japan.htm", 
"https://www.freeroms.com/roms/psp/77_-_beyond_the_milky_way_japan.htm", 
"https://www.freeroms.com/roms/psp/7th_dragon_2020_japan.htm", 
"https://www.freeroms.com/roms/psp/7th_dragon_2020-ii_japan.htm"];

var a = [
"https://wowroms.com/en/isos/playstation-portable/download-ace-armstrong-vs-the-alien-scumbags/32995.html", 
"https://www.freeroms.com/roms/psp/ace_combat_-_joint_assault_europe.htm", 
"https://www.freeroms.com/roms/psp/ace_combat_x_-_skies_of_deception_europe.htm", 
"https://www.freeroms.com/roms/psp/aces_of_war_europe.htm", 
"https://www.freeroms.com/roms/psp/aedis_eclipse_-_generation_of_chaos.htm",
"https://www.freeroms.com/roms/psp/after_burner_-_black_falcon_europe.htm", 
"https://www.freeroms.com/roms/psp/air_conflicts_-_aces_of_world_war_ii.htm", 
"https://www.freeroms.com/roms/psp/aliens_vs_predator_-_requiem_europe.htm", 
"https://wowroms.com/es/isos/playstation-portable/download-angry-birds-clone/33029.html", 
"https://www.freeroms.com/roms/psp/ape_academy_europe.htm", 
"https://www.freeroms.com/roms/psp/ape_academy_2_europe.htm",
"https://www.freeroms.com/roms/psp/ape_escape_p_europe.htm",
"https://www.freeroms.com/roms/psp/downstream_panic!.htm", 
"https://www.freeroms.com/roms/psp/archer_maclean's_mercury_europe.htm", 
"https://www.freeroms.com/roms/psp/armored_core_-_formula_front_extreme_battle_europe.htm", 
"https://www.freeroms.com/roms/psp/armored_core_-_last_raven_portable.htm", 
"https://www.freeroms.com/roms/psp/armored_core_-_silent_line_portable.htm",
"https://www.freeroms.com/roms/psp/armored_core_3_portable.htm", 
"https://www.freeroms.com/roms/psp/army_of_two_-_the_40th_day_europe.htm", 
"https://www.freeroms.com/roms/psp/asphalt_-_urban_gt_2_europe.htm", 
"https://www.freeroms.com/roms/psp/assassin's_creed_-_bloodlines_europe.htm", 
"https://www.freeroms.com/roms/psp/asterix_and_obelix_xxl_2_-_mission_wifix_europe.htm", 
"https://www.freeroms.com/roms/psp/astro_boy_-_the_video_game_europe.htm",
"https://www.freeroms.com/roms/psp/autoescuela_aprueba_conmigo_spain.htm", 
"https://www.freeroms.com/roms/psp/avatar_-_the_legend_of_aang_europe.htm", 
"https://www.freeroms.com/roms/psp/alien_syndrome_europe.htm", 
"https://www.freeroms.com/roms/psp/astonishia_story_europe.htm", 
"https://www.freeroms.com/roms/psp/astonishia_story_2_korea.htm", 
"https://www.freeroms.com/roms/psp/atv_offroad_fury_-_blazin'_trails_europe.htm",
"https://www.freeroms.com/roms/psp/atv_offroad_fury_pro_europe.htm",
"https://www.freeroms.com/roms/psp/abunai_-_koi_no_sousa_shitsu_japan.htm", 
"https://www.freeroms.com/roms/psp/accel_world_-_ginyoku_no_kakusei_japan.htm", 
"https://www.freeroms.com/roms/psp/accel_world_-_kasoku_no_chouten_japan.htm", 
"555", 
"555",
"555"];
var b = [
"555", 
"555", 
"555", 
"555", 
"555",
"555", 
"555", 
"555", 
"555", 
"555", 
"555",
"555",
"555", 
"555", 
"555", 
"555", 
"555",
"555"
  
  ];

var enlaces = [nu, a, b];


enviar();
function enviar() {
  WebViewInterface.obtenerDatos();
}


//Seleccionar texto h1
var text = document.querySelector(".txt");

//imprimir un nuevo texto
text.innerHTML = "datos obtenidos";
