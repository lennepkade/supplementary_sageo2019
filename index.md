---
title-heading: false
---
<style>
  @media(max-width: 480px) {
  td {
    display: table-row;
  }
    }
</style>

# Matériel complémentaire pour SAGEO 2019 
Annexes de l'article *Estimer l'apport de la phénologie dans la classification des essences forestières* par Nicolas Karasiak, Jean-François Dejoux, Claude Monteil and David Sheeren.


 {% include toc.html html=content sanitize=true class="inline_toc" id="my_toc" h_min=2 h_max=3 %}
 {% include toc.html html=content %}
  {{ content }} 

## Carte interactive des essences cartographiées en 2018

La cartographie des essences forestières de 2018 présentée en aperçu ci-dessous a été générée à partir des 44 meilleures bandes de la série temporelle Sentinel-2 de 2018. Cliquez sur l'image pour accéder à la version interactive :

<a href='map/index.html'><img src='map/2018_map_sample.png'></a>

## Comportement spectral moyen des feuillus en 2018 

<table>
  <tr>
    <td><img src='figures/B2_fr.jpg'></td>
    <td><img src='figures/B3.jpg'></td>
  </tr>
  <tr>
    <td><img src='figures/B4.jpg'></td>
    <td><img src='figures/B8.jpg'></td>
  </tr>
  <tr>
    <td><img src='figures/B5.jpg'></td>
    <td><img src='figures/B6.jpg'></td>
  </tr>
  <tr>
    <td><img src='figures/B11.jpg'></td>
    <td><img src='figures/B12.jpg'></td>
  </tr>
 </table>
  
## Dates sélectionnées

### Classification 1 feuillus contre l'ensemble des feuillus
Classification à 2 classes.
<table>
  <tr>
    <th>2017</th>
    <th>2018</th>
  </tr>
  <tr>
    <td><img src='figures/1vsallbroadleaf_2017_fr.jpg'></td>
    <td><img src='figures/1vsallbroadleaf_2018_fr.jpg'></td>
  </tr>
</table>

### Classification des 7 feuillus simultanément
Classification à 7 classes.
<table>
  <tr>
    <th>2017</th>
    <th>2018</th>
  </tr>
  <tr>
    <td><img src='figures/indicebroadleaf_2017_fr.jpg'></td>
    <td><img src='figures/indicebroadleaf_2018_fr.jpg'></td>
  </tr>
</table>

## Stabilité de la cartographie

### Stabilité des feuillus 
Évolution de la part des feuillus prédits dans la cartographie globale réalisée avec la meilleure sélection de caractéristiques en 2017 et 2018.

<table>
  <tr>
    <th>2017</th>
    <th>2018</th>
  </tr>
  <tr>
    <td><img src='figures/shareSpecies_2017.jpg'></td>
    <td><img src='figures/shareSpecies_2018.jpg'></td>
  </tr>
</table>

### Stabilité de l'ensemble des essences


Évolution de la part par essence dans la cartographie de 2017 et 2018.
Avec ou sans SFS (Sélection de Caractéristiques, en anglais Sequential Forward Selection).

<table>
  <tr>
    <th>Sans SFS</th>
    <th>Avec SFS</th>
  </tr>
  <tr>
    <td><img src='figures/shareSFSSITS_noSFS.jpg'></td>
    <td><img src='figures/shareSFSSITS.jpg'></td>
  </tr>
</table>


