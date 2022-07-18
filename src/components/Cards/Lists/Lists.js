import DoneIcon from '@mui/icons-material/Done'
import { ListItemText } from '@mui/material'
import { nanoid } from 'nanoid'

// ** Images **
import Aanzet_Server from '../../../assets/images/Card/Aanzet_Server.png'
import slimERP from '../../../assets/images/Card/slimerp.png'
import easyPaisa from '../../../assets/images/Card/easypaisa.png'
import Fiat from '../../../assets/images/Card/fiat.png'
import Ikano from '../../../assets/images/Card/ikano.png'
import Kabuta from '../../../assets/images/Card/Kabuta.png'
import Qairos from '../../../assets/images/Card/Qairos.png'
import JazzCash from '../../../assets/images/Card/JazzCash.png'
import JazzCash_Business from '../../../assets/images/Card/JazzCash_Business.png'
import Etisalat from '../../../assets/images/Card/Etisalat.png'
import friendsVPN from '../../../assets/images/Card/friendsVPN.png'
import FriendsVPN_mbl from '../../../assets/images/Card/mobile_friends_vpn.png'

// ** Icons **
import vlunch from '../../../assets/images/vlunch.png'
import FriendsVPNIcon from '../../../assets/images/FriendsVPN.png'
import slimerp from '../../../assets/images/slimerp.png'
import EasyPaisaIcon from '../../../assets/images/E/Easypaisa.png'
import flat from '../../../assets/images/flat.png'
import ikano from '../../../assets/images/E/ikano.png'
import kabuta from '../../../assets/images/E/Kub.png'
import Qars from '../../../assets/images/E/Qars.png'
import jazz_a from '../../../assets/images/jazz_a.png'
import etisalat from '../../../assets/images/E/etisalat.png'

export const DataList = {
  // ** Server **
  Server: {
    display: true,
    name: 'Network & System Administration',
    list: [
      {
        _id: nanoid(),
        pic: Aanzet_Server,
        icon: vlunch,
        alt: 'Aanzet_Server_icon',
        heading: 'Aanzet Server',
        description:
          'AanZet guides status holders to work, home, and social contacts. We support municipalities in the reintegration and participation processes of beneficiaries.<br />As a status holder, you are responsible for your naturalization and integration. Fortunately, you are not alone. We guide you towards a self-reliant existence, including paid work. <br />Discover our services for status holders, municipalities, and employers in the Netherlands and Belgium.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: friendsVPN,
        icon: FriendsVPNIcon,
        alt: 'friendsVPN_icon',
        heading: 'FriendsVPN Server',
        description:
          'FriendsVPN is a free VPN service offered by us. FriendsVPN offers you secure and private internet access. We prioritize your online privacy, security, and freedom above all else. You can use FriendsVPN if you want online privacy and security.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: Qairos,
        icon: Qars,
        alt: 'Qars_icon_IOS_Server',
        heading: 'Qairos Server',
        description: 'We handle Qairos Server side all integrations. i.e',
        items: [
          {
            id: '1',
            itemIcon: <DoneIcon color='primary' />,
            itemText: <ListItemText primary='Handle data base' />,
          },
          {
            id: '2',
            itemIcon: <DoneIcon color='primary' />,
            itemText: <ListItemText primary='Security' />,
          },
          {
            id: '3',
            itemIcon: <DoneIcon color='primary' />,
            itemText: <ListItemText primary='Server Configuration' />,
          },
        ],
      },
    ],
  },

  // ** Android **
  Android: {
    display: true,
    name: 'Android',
    list: [
      {
        _id: nanoid(),
        pic: Aanzet_Server,
        icon: vlunch,
        alt: 'Aanzet_Server_icon_Android',
        heading: 'Aanzet Android',
        description:
          'AanZet guides status holders to work, home, and social contacts. We support municipalities in the reintegration and participation processes of beneficiaries.<br />As a status holder, you are responsible for your naturalization and integration. Fortunately, you are not alone. We guide you towards a self-reliant existence, including paid work.<br />Discover our services for status holders, municipalities, and employers in the Netherlands and Belgium.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },
      {
        _id: nanoid(),
        pic: FriendsVPN_mbl,
        icon: FriendsVPNIcon,
        alt: 'friendsVPN_icon_android',
        heading: 'FriendsVPN Mobile App',
        description:
          'FriendsVPN is a free VPN service offered by us. FriendsVPN offers you secure and private internet access. We prioritize your online privacy, security, and freedom above all else. You can use FriendsVPN if you want online privacy and security.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },
    ],
  },

  // ** WEB **
  Web: {
    display: true,
    name: 'Web',
    list: [
      {
        _id: nanoid(),
        pic: Aanzet_Server,
        icon: vlunch,
        alt: 'Aanzet_Server_icon_WEB',
        heading: 'AanZet Web',
        description:
          'AanZet guides status holders to work, home, and social contacts. We support municipalities in the reintegration and participation processes of beneficiaries.<br />As a status holder, you are responsible for your naturalization and integration. Fortunately, you are not alone. We guide you towards a self-reliant existence, including paid work.<br />Discover our services for status holders, municipalities, and employers in the Netherlands and Belgium.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },
      {
        _id: nanoid(),
        pic: friendsVPN,
        icon: FriendsVPNIcon,
        alt: 'friendsVPN_icon_WEB',
        heading: 'FriendsVPN Web App',
        description:
          'FriendsVPN is a free VPN service offered by us. FriendsVPN offers you secure and private internet access. We prioritize your online privacy, security, and freedom above all else. You can use FriendsVPN if you want online privacy and security.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },
    ],
  },

  // ** IOS **
  IOS: {
    display: true,
    name: 'IOS',
    list: [
      {
        _id: nanoid(),
        pic: Aanzet_Server,
        icon: vlunch,
        alt: 'Aanzet_Server_icon_IOS',
        heading: 'Aanzet IOS',
        description:
          'AanZet guides status holders to work, home, and social contacts. We support municipalities in the reintegration and participation processes of beneficiaries.<br />As a status holder, you are responsible for your naturalization and integration. Fortunately, you are not alone. We guide you towards a self-reliant existence, including paid work.<br />Discover our services for status holders, municipalities, and employers in the Netherlands and Belgium.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: slimERP,
        icon: slimerp,
        alt: 'slimERP_icon_IOS',
        heading: 'Slim ERP',
        description:
          'A Sophisticated Accounting Solution for your Business needs.<br /><br />SlimERP is an accounting software Package. SlimERP apps are geared mainly toward needs of a small business into one user-friendly system and offer cloud-based accounting applications that accept business payments, generate invoices, manage and pay expenses, and payroll functions.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: easyPaisa,
        icon: EasyPaisaIcon,
        alt: 'easyPiasa_icon_IOS',
        heading: 'Easypaisa - Payments Made Easy',
        description:
          'Adopt the easy life with easypaisa app - innovative, simple & fast. Money transfers, payments and mobile load made easy.<br /><br />Go cashless and use easypaisa digital wallet for online payments, money transfer, recharging your number, activating any network’s package, or purchasing tickets etc. You can do it all & so much more by just signing-up on easypaisa. Any trouble? Get customer service within the app!<br/><br /> You think it & we make it possible.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: Fiat,
        icon: flat,
        alt: 'Fiat_icon_IOS',
        heading: 'FIAT POS',
        description:
          'Point of sale for FIAT for managing their car sales. Fiat Automobiles S.p.A. is an Italian automobile manufacturer, formerly part of Fiat Chrysler Automobiles, and since 2021 a subsidiary of Stellantis through Italian factory FCA Italy.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: Ikano,
        icon: ikano,
        alt: 'ikano_icon_IOS',
        heading: 'IKANO Bank',
        description: 'Ikano Bank is a consumer finance bank established in 1995 by Ingvar Kamprad.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: Kabuta,
        icon: kabuta,
        alt: 'kabuta_icon_IOS',
        heading: 'Kubota',
        description:
          "Kubota uses a wide range of products and technologies to provide solutions in the areas of food, water, and the environment, which are indispensable for people's lives. From a grain of rice or a drop of water to the foundations of society and industry, Kubota's solutions support the lives of human beings.",
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: JazzCash,
        icon: jazz_a,
        alt: 'jazzCash_icon_IOS',
        heading: 'JazzCash- Your Mobile Account',
        description:
          'JazzCash is Pakistan’s largest mobile wallet trusted by millions of Pakistanis. Install the new JazzCash app and experience seamless payments, transfer money to anyone anywhere, pay utility bills, recharge your mobile balance, subscribe to mobile packages and much more.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: JazzCash_Business,
        icon: jazz_a,
        alt: 'jazzCash_icon_IOS_business',
        heading: 'JazzCash Business',
        description:
          'JazzCash is Pakistan’s largest mobile wallet trusted by millions of Pakistanis. Install the new JazzCash app and experience seamless payments, transfer money to anyone anywhere, pay utility bills, recharge your mobile balance, subscribe to mobile packages and much more.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: Etisalat,
        icon: etisalat,
        alt: 'etisalat_icon_IOS',
        heading: 'Etisalat',
        description:
          'App allows you to activate eSIM through My Etisalat App.<br /><br />Experience enhancement on different touch points of the App',
        items: [],
      },

      {
        _id: nanoid(),
        pic: Qairos,
        icon: Qars,
        alt: 'Qars_icon_IOS',
        heading: 'Qairos Passenger',
        description:
          'After downloading you can start using Qairos with your preferred driver and use his service.<br />If he’s not available, don’t worry, Qairos will find a driver. You can use Qairos also outside your home area.<br />You can pay the driver as you’re used to,Qairos will send you afterwards a receipt to your mail address.<br />After your trip you can rate the driver. Qairos will automatically choose the driver with the highest rating.',
        items: [
          // {
          //   id: '1',
          //   itemIcon: <DoneIcon color='primary' />,
          //   itemText: <ListItemText primary='Unique visual system' />,
          // },
        ],
      },

      {
        _id: nanoid(),
        pic: Qairos,
        icon: Qars,
        alt: 'Qars_icon_IOS_driver',
        heading: 'Qairos Driver',
        description:
          'Qairos is an open App. where you can serve your own customers and build your own customer Network. The App. will broadcast the trips to other drivers who you personally choose. And if your chosen driver-list are not available. The App. will broadcast the trip to the cars in the Qairos network.',
        items: [
          {
            id: '1',
            itemIcon: <DoneIcon color='primary' />,
            itemText: <ListItemText primary='Easy servicing your customers.' />,
          },
          {
            id: '2',
            itemIcon: <DoneIcon color='primary' />,
            itemText: <ListItemText primary='Build your own customer database' />,
          },
          {
            id: '3',
            itemIcon: <DoneIcon color='primary' />,
            itemText: <ListItemText primary='Your customers are served by you' />,
          },
          {
            id: '4',
            itemIcon: <DoneIcon color='primary' />,
            itemText: (
              <ListItemText primary='Your customers will see all cars connected with Qairos in the region and you act like a big organization' />
            ),
          },
        ],
      },
    ],
  },

  // ** React Native **
  ReactNative: {
    display: true,
    name: 'React Native',
    list: [],
  },

  // ** Word Press **
  WordPress: {
    display: true,
    name: 'WordPress',
    list: [],
  },

  // ** Graphics UI/UX **
  Graphics: {
    display: true,
    name: 'Graphics',
    list: [],
  },
}
