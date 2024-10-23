import { title } from "process";
import Countdown from "../components/Countdown";

  // constants/content.js
export const content = {
    ja: {
        pagetitle: 'ようこそ | ドン・クレープ',
        title: 'DON CREPE',
        subtitle: '@第33回茨香祭',
        greeting: [
          'こんにちは！',
          '私達は、茨城高専1年2組「ドン・クレープ」です！',
          '第33回茨香祭でクレープを販売します！！'
        ],
        location: {
          title: '📍 場所',
          content: '8号館3F 1-2教室'
        },
        hours: {
          title: '⏰ 営業時間',
          day1: '1日目:10:00 - 17:00',
          day2: '2日目:10:00 - 17:00'
        },
        notices: {
          title: '⚠️ お知らせ',
          items: [
            '一般公開は一日目(10/26)のみになります',
            '材料がなくなり次第、営業終了となります',
            'アレルギー情報は店頭でお尋ねください',
            'お支払いは現金のみとなります'
          ]
        },
        orderProcess: {
          title: '💡 ご注文の流れ',
          steps: [
            '店頭でご注文ください',
            'お会計をお願いします',
            'お呼びしましたらクレープをお受け取りください'
          ]
        },
      // SNSページ
      sns: {
        pagetitle: 'SNS | ドン・クレープ',
        title: 'SNSアカウント',
        instagram: {
          title: 'Instagram',
          description: '最新のクレープ写真やメニューをチェック！',
          buttonText: '@don_crepe.nitic をフォロー'
        },
        twitter: {
          title: 'X(Twitter)',
          description: 'お得な情報や最新情報をお届け！',
          buttonText: '@don_crepe_nitic をフォロー'
        }
      },
  
      // メニューページ
      menu: {
        pagetitle: 'メニュー | ドン・クレープ',
        title: '人気メニュー',
        items: [
          {
            name: 'いちごチョコ🍓',
            description: '甘酸っぱいイチゴと濃厚クリームの絶妙なハーモニー',
            price: '¥400'
          },
          {
            name: 'クッキーアンドクリーム🍪',
            description: 'サクサクのクッキーと濃厚なクリームの絶妙なコンビネーション',
            price: '¥450'
          },
          {
            name: '抹茶あんこ🍵',
            description: '濃厚な抹茶と甘さ控えめのあんこの絶妙なバランス',
            price: '¥450'
          }
        ]
      },
  
      // アクセスページ
      access: {
        pagetitle: 'アクセス | ドン・クレープ',
        title: 'アクセス情報',
        storeInfo: {
          title: '店舗情報',
          description: 'ドン・クレープは、第33回茨香祭の1年2組で出店しています！',
          details: [
            {
              label: '場所',
              content: '茨城工業高等専門学校 8号館1年2組教室（3階）'
            },
            {
              label: '住所',
              content: '〒312-8508 茨城県ひたちなか市中根866'
            },
            {
              label: '最寄り駅',
              content: 'JR勝田駅から徒歩約40分'
            }
          ]
        },
        map: {
          title: 'アクセスマップ'
        }
      },
      Footer: {
        address: [
            '〒312-8508',
            <br />,
            '茨城県ひたちなか市中根866',
            <br />,
            '茨城工業高等専門学校',
            <br />,
            '8号館1年2組教室（3階）',
        ],
        copy: [
          '© ドン・クレープ 第33回茨香祭1年2組'
        ]
      },
      Countdown: {
        title: '⏳ カウントダウン',
        days: '日',
        hours: '時間',
        minutes: '分',
        seconds: '秒'
      }
    },
    
    en: {
        pagetitle: 'Welcome | Don Crepe',
        title: 'DON CREPE',
        subtitle: '@33rd Shikosai',
        greeting: [
          'Hello!',
          'We are Don Crepe from Class 1-2 at NITIC!',
          'We will be selling crepes at the 33rd Shikosai!!'
        ],
        location: {
          title: '📍 Location',
          content: 'Building 8, 3F, Class 1-2'
        },
        hours: {
          title: '⏰ Business Hours',
          day1: 'Day 1: 10:00 - 17:00',
          day2: 'Day 2: 10:00 - 17:00'
        },
        notices: {
          title: '⚠️ Notices',
          items: [
            'Public admission is only available on Day 1 (10/26)',
            'We will close when we run out of ingredients',
            'Please ask about allergy information at the store',
            'Cash payments only'
          ]
        },
        orderProcess: {
          title: '💡 How to Order',
          steps: [
            'Place your order at the counter',
            'Make your payment',
            'Pick up your crepe when called'
          ]
        },
      
      // SNSページ
      sns: {
        pagetitle: 'SNS | Don Crepe',
        title: 'Social Media',
        instagram: {
          title: 'Instagram',
          description: 'Check out our latest crepe photos and menu!',
          buttonText: 'Follow @don_crepe.nitic'
        },
        twitter: {
          title: 'X(Twitter)',
          description: 'Get the latest updates and special offers!',
          buttonText: 'Follow @don_crepe_nitic'
        }
      },
  
      // メニューページ
      menu: {
        pagetitle: 'Menu | Don Crepe',
        title: 'Popular Items',
        items: [
          {
            name: 'Strawberry Chocolate 🍓',
            description: 'Perfect harmony of sweet-tart strawberries and rich cream',
            price: '¥400'
          },
          {
            name: 'Cookies & Cream 🍪',
            description: 'Perfect combination of crunchy cookies and rich cream',
            price: '¥450'
          },
          {
            name: 'Matcha Red Bean 🍵',
            description: 'Perfect balance of rich matcha and mildly sweet red bean paste',
            price: '¥450'
          }
        ]
      },
  
      // アクセスページ
      access: {
        pagetitle: 'Access | Don Crepe',
        title: 'Access Information',
        storeInfo: {
          title: 'Store Information',
          description: 'Don Crepe is located at Class 1-2 booth during the 33rd Shikosai!',
          details: [
            {
              label: 'Location',
              content: 'National Institue of Technology, IBaraki College, Building 8, Class 1-2 (3rd floor)'
            },
            {
              label: 'Address',
              content: '866 Nakane, Hitachinaka-shi, Ibaraki-ken 312-8508'
            },
            {
              label: 'Nearest Station',
              content: '40 min walk from JR Katsuta Station'
            }
          ]
        },
        map: {
          title: 'Access Map'
        }
      },

      Footer: {
        address: [
          'National Institue of Technology', 
          <br key="1" />,
          'Ibaraki College, Building 8 Class 1-2 (3rd floor)',
          <br key="2" />,
          '866 Nakane', 
          <br key="3" />,
          'Hitachinaka-shi Ibaraki-ken',
          <br key="4" />, 
          '〒312-8508'
        ],
        copy: [
          '© Don Crepe',
          <br key="5" />,
          '33rd Shikosai',
          <br key="6" />,
          'Class 1-2'
        ]
      },
      Countdown: {
        title: '⏳ Countdown',
        days: 'days',
        hours: 'hours',
        minutes: 'minutes',
        seconds: 'seconds'
    }
  }
}