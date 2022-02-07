
import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentArray: Content[];
    


  constructor() {
    this.contentArray = [{
      id: 0,
      title: 'Pokemon Red',
      description: 'Pokémon Red Version and Pokémon Blue Version are 1996 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy',
      creator: 'Game Freak',
      imgURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.wikimg.net%2Fen%2Fstrategywiki%2Fimages%2Fc%2Fca%2FPokemon_red_box.jpg&imgrefurl=https%3A%2F%2Fstrategywiki.org%2Fwiki%2FPok%25C3%25A9mon_Red_and_Blue&tbnid=Q0Go8UTlQfnvrM&vet=12ahUKEwiWlf3Rsuz1AhVtgnIEHYdMCxQQMygCegUIARC8AQ..i&docid=YwP5_SlPOY-LPM&w=600&h=600&q=pokemon%20red%20description&ved=2ahUKEwiWlf3Rsuz1AhVtgnIEHYdMCxQQMygCegUIARC8AQ',
      type: 'GameBoy'

    },
    {
      id: 1,
      title: 'Banjo-Kazooie',
      description: 'The games feature a male bear named Banjo and his friend, a large female red bird called Kazooie, who are both controlled by the player',
      creator: 'Rare',
      imgURL: 'https://www.google.com/search?q=banjo+kazooie&sa=X&bih=880&biw=1920&rlz=1C1CHBF_enCA972CA972&hl=en-GB&sxsrf=APq-WBt_j5OOjbtox0vMA_Sh9YZc1PKftA:1644195898357&tbm=isch&source=iu&ictx=1&vet=1&fir=tHDU-rorsfpqWM%252CiKmQi1X8USgd9M%252C_%253B8dxVvODFPZd4MM%252C_7jSPTsd3PHLaM%252C_%253BTKuhPQYH4KgKOM%252CHQrYQEumMh298M%252C_%253BrjXhBbAdqv5U0M%252CoRL1sQjYk3bODM%252C_%253BN0qSszeadbPm0M%252C5sI_eGbLqagX2M%252C_&usg=AI4_-kQJ2dbQDKHs7lWU8WkFiuxTqvbOGg&ved=2ahUKEwiGitmDs-z1AhWam2oFHRf_Ag4Q_h16BAgxEAE#imgrc=8dxVvODFPZd4MM',
      type: 'Nintendo 64'
    },
    {
      id: 2,
      title: 'Rust',
      description: 'Rust is a multiplayer-only survival video game developed by Facepunch Studios',
      creator: 'Facepunch Studios',
      imgURL: 'https://www.google.com/search?q=Rust+(video+game)&sa=X&rlz=1C1CHBF_enCA972CA972&hl=en-GB&biw=1920&bih=880&sxsrf=APq-WBuQC90EoVqn-4BEO2Agk6pcLejzPw:1644196044661&tbm=isch&source=iu&ictx=1&vet=1&fir=yHSDz8QHzGRC2M%252C7GAxSix_X9GvhM%252C%252Fm%252F0zm_2_r%253BZsTRLMl_YbUeIM%252C-NAQ8YwMwdek-M%252C_%253BoGOvQSehGL0xPM%252CzDjun5soXiHmrM%252C_%253BHHN7onPyScpc6M%252CYCi4L-Z_PO0DlM%252C_%253BuUvRcAm9M_1TeM%252CVT7P_JNyC-sDWM%252C_%253Bb_v5l-ewacQZGM%252CzDjun5soXiHmrM%252C_%253BNBdSHpvu2kMmpM%252CFNRiWP4yT4bGOM%252C_&usg=AI4_-kRbj7sweuiN0pZGNQjzhIAqbtlj8A&ved=2ahUKEwjT5rrJs-z1AhUGl4kEHWNtD0AQ_B16BAg4EAE#imgrc=yHSDz8QHzGRC2M',
      type: 'Playstation, Xbox, and Computers'
    },
    {
      id: 3,
      title: 'Pokemon Legends Arceus',
      description: 'Pokémon Legends: Arceus is an action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch',
      creator: 'Game Freak',
      imgURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F9%2F9c%2FPokemon_Legends_Arceus_cover.jpg%2F220px-Pokemon_Legends_Arceus_cover.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPok%25C3%25A9mon_Legends%3A_Arceus&tbnid=8UlGtfzmJ0NtWM&vet=12ahUKEwiMgbTTu-z1AhW2n3IEHeHFBxMQMygCegUIARDDAQ..i&docid=JyZoTvtYMASFNM&w=220&h=357&itg=1&q=pokemon%20legends%20arceus&ved=2ahUKEwiMgbTTu-z1AhW2n3IEHeHFBxMQMygCegUIARDDAQ',
      type: 'Nintendo Switch'
    },
    {
      id: 4,
      title: 'Minecraft',
      description: 'Minecraft is a sandbox video game developed by the Swedish video game developer Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language',
      creator: 'Mojang Studios',
      imgURL: 'https://www.google.com/search?q=minecraft+description&bih=880&biw=1920&rlz=1C1CHBF_enCA972CA972&hl=en-GB&sxsrf=APq-WBuu7cDSy3gagx9wsWV-Aij5Hk7jZg:1644198326555&tbm=isch&source=iu&ictx=1&vet=1&fir=SF1PfcY_FwHXHM%252CEX__o7CpQE8fOM%252C%252Fm%252F09v6kpg%253B1r1IA10MQ12B7M%252CHLivhQj4bD3W-M%252C_%253Bm_VHnAB2N9jqxM%252CiKUqSIZZqbGMBM%252C_%253B8a24Su7uXYD7iM%252CqrEJffNksHzh1M%252C_%253BcJJdZJkihz4y6M%252CHLivhQj4bD3W-M%252C_%253BX_MFQtDFsyk4XM%252CAd8shX62hrrUVM%252C_%253BZ-ADEByrzAe1XM%252Ct-EvMKaKEOgvsM%252C_&usg=AI4_-kR0UudPTHB0ddPk8acaeyTJx46R1Q&sa=X&ved=2ahUKEwiO38aJvOz1AhWXlYkEHQSFDMcQ_B16BAhCEAE#imgrc=SF1PfcY_FwHXHM',
      type: 'Just about every platform'
    },
    {
      id: 5,
      title: 'Madden 22',
      description: 'Madden NFL 22 is an American football video game based on the National Football League, developed by EA Tiburon and published by Electronic Arts',
      creator: 'EA',
      imgURL: 'https://www.google.com/search?q=MAdden+22&bih=880&biw=1920&rlz=1C1CHBF_enCA972CA972&hl=en-GB&sxsrf=APq-WBvchnENy0aCUqwb3SXjDa8szicF5g:1644198428371&tbm=isch&source=iu&ictx=1&vet=1&fir=yQggsV_60hhlWM%252CDQPEtD-k4Z4WjM%252C%252Fg%252F11q2vz8ky2%253B0ACK4nmsuYWbyM%252CpXJRbY1u3BukaM%252C_%253BZQksDP-0MSiGmM%252CW_cCWKpmQr6wdM%252C_%253Bj8ilYSYs1SXYoM%252CF4QbVfqshUlyNM%252C_%253BZs1KG-jgN-Dy1M%252COWOcYJVGiH-5OM%252C_%253BnV3Zg-FCKpKODM%252CDIBsxjM0Z_g1iM%252C_%253BT6-OGTPTtb5G2M%252CoFRs2m4H1_F0eM%252C_&usg=AI4_-kTm7sDDFsJ7Dkplq8J2O-FJ3GXNPw&sa=X&ved=2ahUKEwjqh426vOz1AhVslokEHdSAAwsQ_B16BAg3EAE#imgrc=yQggsV_60hhlWM',
      type: 'Xbox, Playstation, PC'
  }];
}
    

  

  ngOnInit(): void {
  }

}
