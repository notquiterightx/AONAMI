# AŌNAMI Build Guide
### Tools

- Soldering Iron, preferrably with adjustable temperature for and easier time
- Surgical face mask, optional but you don't want to breathe fumes in
- Flux is strongly recommended, but having solder wire with a flux core worked well for me
- Solder wire. The thinnest you can find will make soldering easied. For your health & safety, lead-free would be better
- Small tweezers for handling small components
- M2 Screwdriver, I used hex screws but feel free to use any that fit you best
- A multimeter is useful for troubleshooting but not necessary

### PCB Files

You will need the PCB files for the keyboard. They can be found [here](/pcbs/)

### BOM

This is the BOM for the Tenting build, the Low Profile build is still a WIP.

| Component                              | Quantity | Notes                                                                       |
|----------------------------------------|:--------:|-----------------------------------------------------------------------------|
| **Soldering Components**               |          |                                                                             |
| AŌNAMI PCB                             |     2    | One for each half                                                           |
| Seeed Xiao nRF52840                    |     2    | The microcontroller                                                         |
| JST 1.25 SMD 2pin Horizontal Connector |     2    | For the batteries                                                           |
| Choc Hot-swap Sockets                  |    40    | 1 per switch                                                                |
| T4 1N4148 SMD Diodes                   |    40    | 1 per switch                                                                |
| EC11 Encoders                          |     2    | 1 per side                                                                  |
| 3.5 mm pogo pins                       |     6    | 3 per side                                                                  |
| PIN LED Connectors                     |    28    | 14 per MCU, they will be the legs for hotswapping                           |
| Female Round Headers 2.54mm            |    28    | Buy them in a pack, hotswap sockets for MCU                                 |
| Alps SKHLLCA010                        |     2    | Reset buttons                                                               |
| MSK12C02                               |     2    | Power switches                                                              |
| **Assembly Components**                |          |                                                                             |
| Soldered PCB                           |     2    |                                                                             |
| Switches (Choc v1/v2)                  |    40    | 1 per socket                                                                |
| Keycaps                                |    40    | Must be compatible with your switches                                       |
| Case                                   |   1 set  | Includes top and bottom parts for each half                                 |
| 303450 LiPo Battery (600mAh)           |     2    | Or smaller, with a JST 1.25 plug                                            |
| Tenting feet                           |     4    | Example source [here](https://es.aliexpress.com/item/1005013355893301.html) |
| M2x3x3 Heat Inserts                    |    14    | 7 per side                                                                  |
| M2x5mm Flathead Screws                 |     6    | To hold the switch plate                                                    |
| M2x12mm Flathead Screws                |     8    | To hold the case parts                                                      |
| EC11 knobs                             |     2    | For the encoders                                                            |
| Anti-Slip adhesive sheet               |     1    | Optional, example source [here](https://a.aliexpress.com/_EydxGS2)          |

