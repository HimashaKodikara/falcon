// src/App.js
import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';

import E1 from './images/EV/E1.jpg';
import E2 from './images/EV/E2.jpg';
import E3 from './images/EV/E3.jpg';


const App = () => {
  const categories = ['EXMO', 'EV Exhibition', 'Formula Bharat', 'Test phase-1', 'Techno'];

  const images = [
    { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/363768643_252364144256146_6006551692501747251_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHTruza8bQJCv9NZu-yWblpRMseV2jfkiREyx5XaN-SJBl56rBibaQNpXzLZHOc_BxHUY06J6h5j6ZnwuSf47ya&_nc_ohc=wuYFzVo393MQ7kNvgGOWOx5&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBU9ZYS-H645NF0J-5sMizofm-HF0SqYWMjSUpAsr0EzQ&oe=66900884", description: 'Falcon has officially launched its latest initiative, taking its innovative solutions on the road.', category: 'EXMO' },
    { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/363769452_252364177589476_323869514851918878_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFTBcjt3bOId2ATq9Zna_9xC5M_O3joyrELkz87eOjKsRmmSH8oTrGZbo0c_Z8tnZFqn2Pnft-w2BQFqjSEzkAs&_nc_ohc=Wjxsh4pOdD4Q7kNvgEr8C3j&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBqDstdfha3ek3rbvA6yU7tJqAFnusxKyBnPsqtCMkT7Q&oe=66901929", description: 'Falcon proudly emphasizes the strength and cohesion of its team in driving forward technological advancements', category: 'EXMO' },
    { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/363772710_252363124256248_5002922652112976139_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFtaFK1ZhlPFjUSAbMSMFs4l1NPI-sWsr-XU08j6xayvwL1Y-NoFc8QqfV2UblFH8Qa7H3RNKdPLIRZi9KYqS87&_nc_ohc=0pzg2iZIivIQ7kNvgFvhdxY&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDzTHsm9-V_iFSy4GhvmvQ4HpmmE4yIgqd1bxD9TOnRlw&oe=66900928", description: 'As we unveil this new advancement, we look forward to the transformative impact it will have, setting new standards in the industry and opening up exciting possibilities for the future.', category: 'EXMO' },
    { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/363776060_252366057589288_7577194619780201468_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEpt79WxKHkcKJjJh37uWiwfU85D-JMhdh9TzkP4kyF2DlU4P82thWcNuon8romRlly2LkxiZ_pDJIr7xXp1oZq&_nc_ohc=D5ykQ66OiXUQ7kNvgFv2dpl&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDX2A_U6IAEK8VwNuoZogIY2UKfAAYPRwuDOeknk0z6UQ&oe=668FFF65", description: 'We are pleased to introduce Falcon, a leading innovator in the technology sector, at this conference. Falcon is renowned for its cutting-edge solutions and commitment to excellence', category: 'EXMO' },
    { src: " https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/364205227_252363257589568_6108984853106607674_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG6gmuV1IEhH1vYm-1T5XJ7iMgRBXVLshyIyBEFdUuyHNyxSzIS6QxMjTMpHS9io_YCwpGyomiqBZNM79CN2EBd&_nc_ohc=ZYl_RuCsZyQQ7kNvgGaoSLx&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBF2BVN91dYMTeaihDhNWYBRYWr2auwObp1QQkOFthFcg&oe=66900D6E", description: 'Break system', category: 'EXMO' },
   
    { src: E1, description: 'Falcon is set to take the stage, presenting its latest innovations and breakthroughs to an eager audience.', category: 'EV Exhibition' },
    { src: E2, description: 'Conducting a thorough system check is crucial to ensure optimal performance and reliability.', category: 'EV Exhibition' },
    { src: E3, description: 'Introducing to public', category: 'EV Exhibition' },
    { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/449435812_915183387286640_1149089086680387248_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvrKKCV0LOz3gor8ncbrBJVaMVSAUVpNpVoxVIBRWk2mMZRrrZRzWsUR0fc9MrPyF4UmDUwiVNLBe8eNwP36oC&_nc_ohc=ml_fmBD3iM4Q7kNvgEHw02z&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYCcid84xc0oymwf4HXO9p0uS7hRk5-9pcR_hB1j_6gq_Q&oe=66900EF8", description: 'EV exhibition team', category: 'EV Exhibition' },
  
    { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/449437188_915183247286654_2408298714161189377_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEP7i_csGviStXmCAj2rdtX56fHJf2QvNjnp8cl_ZC82LmKDA19fysyviwVKukfGDQNCUfydK7nUHC26j1rKMy9&_nc_ohc=QbhffIFDgPMQ7kNvgEoqcUi&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDLBiKDfhUTcb7oQZTEDjX2r4LU31WW-PWC7MH3Dmn0RQ&oe=66900EA7", description: 'introduce formula development to the media', category: 'EV Exhibition' },
    { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/417405703_816264117178568_5251060573549247761_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHMpbVYKpsIru3ebOkf-TRciNoEEDbONl2I2gQQNs42XejRAA7DLo23VIbKjJGju5gFed8HN1_rqLMr98yyaFm_&_nc_ohc=fEOLwDBVoeoQ7kNvgE7ZNMe&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBgsmckp2Y09N_5c5-qQOfD0_ORCEQWWpDxTtUTugtL8w&oe=668FF0BE", description: 'Ready to Race', category: 'Formula Bharat' }, 
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/423007259_815419473929699_4932010144633199025_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFWXjNf1VPcV74_oTxhGKpy9DbokDNIzpv0NuiQM0jOm48oTaaQjPNd4q-w-eqJ21NShtYb7H6pR3udDA6dxOnZ&_nc_ohc=Q2nIuVulU4sQ7kNvgEskqNE&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYA96f3E1hlkmOGSxpQAzazJ5eC76dFTTJkIF1T2t-kn5g&oe=66900D39", description: 'Team Falcon', category: 'Formula Bharat' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/423237368_815421270596186_5038276245104618766_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHV5xGzuSj2LcNnkZ4XxhjeJwXt3xa54NUnBe3fFrng1Xrbq7Z_WLEx5ERAmfiUq9lJ-edWVHW-KkGFpxzee62L&_nc_ohc=CM9HFojBe_wQ7kNvgEMe5oY&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDRzzfKltTQZrFnhGXR59dZIvu0iVCWQ2_S0gLKI8navA&oe=669019DB", description: 'Team Falcon', category: 'Formula Bharat' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/422134034_812391527565827_8740324283733116707_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGR7gZbD8fCEBYySBQ-7kyVgN1NrFzlI1iA3U2sXOUjWNBqPj088K2f1Rjkzrj6B9hZuoa18b0udfP8gR0Fz6Zf&_nc_ohc=ladPzImcZDQQ7kNvgEBXszH&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYCuN77rpCFwmuK6FZjnajzSfXCOrn2ih8D5maveL-ZQCA&oe=66901924", description: 'Making break system', category: 'Formula Bharat' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/421234616_810902447714735_7573606222317423692_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE2N_SmbOAltE5MmsVDGXEudPMn3oHtAx108yfege0DHUiXgWEwS0xDpT2GsRwwJWP_SC9DxtjzqwjSeB71uo6C&_nc_ohc=IBZC9LfCYpkQ7kNvgH1-3Yg&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBHJOPeaXYZo95BU_8Bfqo1kzfK0B23aKliYgnNPJK_aQ&oe=668FF31D", description: 'Sponsers', category: 'Formula Bharat' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/421247223_810902464381400_8416574464883376258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEv2yDknTRXV3ob6SQ8Tm7HV1sPo1alEMVXWw-jVqUQxYlof3324f0-gRBjTE1jbNfzOKGzQbaaZr23aGLdN7sK&_nc_ohc=YBUDm8aFkiQQ7kNvgEkt2h2&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDLbH0js2bLVvbj3FVu2ggDQXRkxWDpSqcw1iuYTt5bow&oe=668FF73D", description: 'On the way to race', category: 'Formula Bharat' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/420431985_810902404381406_2144525400010428670_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEkuSsFM_B1FkI37AB7G9EPluCcUviD5hWW4JxS-IPmFQrla9FdxUrazoOAA2uaPZVtLFcS_drzmHUfEkpHArnm&_nc_ohc=WyHhsmZiuX0Q7kNvgFfhHxO&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBJgfESGP1D4_zE0We5MG4RW3bQ2JSoHYq7M5ryMR9Llw&oe=66900446", description: 'On the way to race', category: 'Formula Bharat' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/421229374_810902371048076_8871081503175763050_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE_OH_zHg2mc1GN-b8NjcKXScwjeSzPceNJzCN5LM9x4930l2J6Tpiwgu8pyfl2mUsz2dFsRNNNcuUcaZv6oBWe&_nc_ohc=HCDjemPlOUMQ7kNvgGQarZG&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBMX9ilY6dljmN1cqrFgMDPMDONjgnHU7EklTJexRHKAg&oe=6690147F", description: 'Before race', category: 'Formula Bharat' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/410103108_786724116799235_6257787915748641646_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHu-roJ6YDdn3vjuaxCigmMqUH8NARCTOWpQfw0BEJM5Vjki5FQ5WJEO9ih3ZEjoj-sT_3bXXfbuPCs4MKr8h8K&_nc_ohc=nmQKk2YQlU0Q7kNvgEBZrIq&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBOe3apCcKTolFmmn6um-TNu7W0aqfgubWf4E_08KuKBw&oe=66900E57", description: 'Falocn testing on road at Rathmalana Air port', category: 'Test phase-1' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/410120930_786724196799227_3662707468822734668_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHriFC46fRwVNWXSBQd4zxZJvHA3KMXC9Em8cDcoxcL0bMMnoMH7CxzeLpahbCS-NAhED1_xgr4-6TX7c8o92nN&_nc_ohc=8U0aLW8Hn9kQ7kNvgHLQo8p&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDIf5POQeeGXsx9OloXx5jODoIV7Abobbyf_GhFtgrPww&oe=668FF5C5", description: 'Falocn testing on road at Rathmalana Air port', category: 'Test phase-1' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/410161728_786724990132481_6986220087914859001_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEskuIN1_QePvFuQwEDkoEKK92WjlGH94Mr3ZaOUYf3g-giMRDACpxkZp1vhXcXgsaLxWkPljE0-1IoeoPl233p&_nc_ohc=iGsZyvpAoNEQ7kNvgENQ5rS&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYAJarT_Ay3q39ChsCCLaKLGlxqK6ikO0Or6o3h3qd8mRg&oe=668FF484", description: 'Falocn testing on road at Rathmalana Air port', category: 'Test phase-1' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/410107272_786724923465821_7361795124257774671_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHWiwFnatBHcO-5-Ie0M8OZ5-_rKtLtsSnn7-sq0u2xKeK4IdkL6H88ItQRpcQBgATckTeSEmnwNjIJJWSi89MJ&_nc_ohc=IYnXmaz7BUUQ7kNvgGVXnTX&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDRGKTdqne_BBaV-fN29TiGrjwzHwDgeineZRWcRPmMwg&oe=668FF7CC", description: 'Falocn testing on road at Rathmalana Air port', category: 'Test phase-1' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/410873284_786723643465949_9201214578403995416_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeENHl1DkwovQPPlx_hMB7tz1Oj5PEnlj1LU6Pk8SeWPUvhbTgbcbKq-Uf0ZOfZmwFyZS7uMrGEqST5YEZ6wuT_o&_nc_ohc=IHJT92HXj40Q7kNvgFi6s8B&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYC2gf-s39-ixIA3aNcmhrJyIpZtsEDLcuunxywVunl8Kw&oe=669001C8", description: 'Falocn testing on road at Rathmalana Air port', category: 'Test phase-1' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/410149279_786723816799265_8992471247611262695_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFfL7UtAiP--d0K-Qdd99tTX_PCjfwK_n9f88KN_Ar-fyWC2_8-mIw9BhBkmb4G66Ti9aGjNcpJLFb2GW6uFK9B&_nc_ohc=YtZ506cfGvMQ7kNvgFD_HjC&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBdwTjIvObSBO1NNu1rhRwhaJCXqae3BW9hYqBkIknLMQ&oe=668FF7CD", description: 'Falocn testing on road at Rathmalana Air port', category: 'Test phase-1' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/410132373_786723776799269_4002692673731204871_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFIq0LjitRfI2jwy8YMtTrJu6PEwi7RDM27o8TCLtEMzRSeLfecJzLV3g9NiAjI4YooIX-vZ-tJ2YTU3jO7024B&_nc_ohc=PZktt2QsZnUQ7kNvgGFSTD1&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBAL8jTK6sZnW1xTtDXEqFfeVsUMZw--bGvGpjSguk3MA&oe=668FF99F", description: 'Falocn testing on road at Rathmalana Air port', category: 'Test phase-1' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/410170251_786723746799272_1986880573508599186_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFRzRQCJe2clXRXyL5XV4poYMbVexBSPCZgxtV7EFI8JkVC8G5x_5_m85ZAx2wU0Mn8UGZYUMBc9Qs9YuHu0ZdE&_nc_ohc=32ps1QKWzR8Q7kNvgHnlk8t&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDIXnn7FYk97AASAm1vJOZ2okCQlJ2SYXTVEVpw3JuPdA&oe=66900714", description: 'Falocn testing on road at Rathmalana Air port', category: 'Test phase-1' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/410008255_786723990132581_1371263874855719958_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFBq7yVk_GiZdDVT4v38P1Z3aBlOuKSZDbdoGU64pJkNj6yub-1StmfmM_Ol4CV6zCHh4jm6X6fr_NPqlYy4NXn&_nc_ohc=AkUY-jdSPu8Q7kNvgEcgRom&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYA_lNgKM0q2IvBRAraBGPsAiNmCGV12D93uNPVfajqNhA&oe=668FE83C", description: 'Falocn testing on road at Rathmalana Air port', category: 'Test phase-1' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/410101685_786724153465898_7443543883259778657_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEcH4_y2avH9JsDke3clS-utYMzwoLH7HS1gzPCgsfsdObJOjZJO7JQSXJ6YboZwLHKi0kZD-D8PXM4AaQAmffO&_nc_ohc=CmiycRwhF_kQ7kNvgF0YUBL&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBIEPq7fETy8-0mzwllFfcWW2pJ-W1YIUMyUuV1AR011Q&oe=66900D6B", description: 'Falocn testing on road at Rathmalana Air port', category: 'Test phase-1' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/394330227_755577629913884_140582193884392699_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHf1Eb_vPsjFO6sOfkFtnN-ieqiT4rjDraJ6qJPiuMOts6jslWZMoGC0eTlWHo4Vh4IJa2k9kBgGxn6Q6p9fknn&_nc_ohc=CRpshCy03EsQ7kNvgH83KSN&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBRamRZ6FxIiNbyBV9Xm9DSiaxzDjKPo3RNT5aKW5ZYjQ&oe=668FEED0", description: 'At the recent Techno Exhibition, Falcon showcased its strong commitment to ethical practices and corporate responsibility', category: 'Techno' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/394350018_755577556580558_5320278818140757749_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFpqX0V1S3hMNbVHs81PRUQXDruOaS7P7xcOu45pLs_vO5j_IJ2yW2et4Ny9jFMGqD7XJzPMn0DtSgTkyvcEOx2&_nc_ohc=iBeEsXzlpKUQ7kNvgGTgrrp&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYCSvB2FcZ4jOhsA8pIVRHjStCe92QhySLugbVC6-zxCMg&oe=668FE507", description: 'At the recent Techno Exhibition, Falcon showcased its strong commitment to ethical practices and corporate responsibility', category: 'Techno' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/393298440_756223456515968_1418571592953952657_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGKqNiXdH9kxJBV6zODSBCu061GPwLURGzTrUY_AtREbNOSn8Hl7oKdldd_1Uqgi3YB9imz7XBG7t1sgFvPxD85&_nc_ohc=mn5P2y6tutMQ7kNvgE5wA_I&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDgQsZZbw3Jcdbhc3RIapai0pDs0ibLtEIbfEZuwDw0FA&oe=668FFC84", description: 'At the recent Techno Exhibition, Falcon showcased its strong commitment to ethical practices and corporate responsibility', category: 'Techno' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/394524121_756223493182631_7678324570732264440_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4y6uniW9ouaB8syrbdz1A_pyeO1BBAPD-nJ47UEEA8CgdeJbop93AvvvgyumqhPnyI1URHeq4UucS93lI2mlR&_nc_ohc=Y19AFSutFn8Q7kNvgHNXZNK&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYD33jIUavHbWCUb2IitIw_5_hXNFTj4W4tHM85p_4LLMQ&oe=668FF08C", description: 'At the recent Techno Exhibition, Falcon showcased its strong commitment to ethical practices and corporate responsibility', category: 'Techno' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/393741858_756223639849283_4618940472739682977_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE5_XqQ9BKq8gK6UCBDur99mjAskQQODPqaMCyRBA4M-g_n0Qj5HRETQ7Ob7oWA-X58_tEh6BdvoiwxwIFJ3Ako&_nc_ohc=UfXpCprHygEQ7kNvgHhL1sb&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYCLdQe7sFoxKuAZSopUJDw0J1BUn7p3_8ZofbsAZ2SQoA&oe=668FEF59", description: 'At the recent Techno Exhibition, Falcon showcased its strong commitment to ethical practices and corporate responsibility', category: 'Techno' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/395736919_757632426375071_5935983368504484527_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGmyo1XbNoYQMiK-sQItCD2mvBv0cMAvtSa8G_RwwC-1OakNHAuG7NHMvu4yPDNRSZLNxAM7Kk2xfYRsnKDo3PO&_nc_ohc=qGNmN4gcRycQ7kNvgFJZhi6&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYBss7lmWo5EsufJ0uVlcyyAhBIAUNk14XlAbfTw0Y6BzQ&oe=66900072", description: 'At the recent Techno Exhibition, Falcon showcased its strong commitment to ethical practices and corporate responsibility', category: 'Techno' },
     { src: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/395769776_757632759708371_1883160727821473542_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGHdQL3hhTasK-m0Gc7rY91rylk3W6tF3ivKWTdbq0XeOD1paMDkMliNTf1T4Mwiom0qkVu8MUTOrKreSF01LXw&_nc_ohc=IagPpnVe_jUQ7kNvgF8ZPvf&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYClh2G4H6j76DcM6xROBkQtPzwtO5t5ESkeBChmiOV0tw&oe=668FF5FC", description: 'At the recent Techno Exhibition, Falcon showcased its strong commitment to ethical practices and corporate responsibility', category: 'Techno' },
  ];

  return (
    <div className="App ">
      <Gallery categories={categories} images={images}  />
    </div>
  );
}

export default App;