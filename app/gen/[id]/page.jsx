import React from 'react'
import Img from "../../assets/gen.png";
import Image from 'next/image';
import Link from 'next/link';

function page({ params }) {

  const data = [
    {
      name: 'perkins',
      dataSet: [
        {
          name: 'Perkins 403A-15G1 / 403D-15G1',
          kv: '13kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 4000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 404A-22G1 / 404D-22G',
          kv: '20kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 4000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 1103A-33G',
          kv: '30kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 1103A-33G1',
          kv: '45kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 1103A-33G2',
          kv: '	60kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 1104A-44TG2',
          kv: '80kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 1104A-44TAG2',
          kv: '100kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 11061-70TAG2',
          kv: '	150kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 1106A-70TAG4',
          kv: '200kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 1506A-E88TAG3',
          kv: '250kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 1506A-E88TAG5',
          kv: '300kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 2206A-E13TAG2 / 2206C-E13TAG2',
          kv: '350kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 2206A-E13TAG3 / 2206C-E13TAG2',
          kv: '400kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 2506A-E15TAG2 / 2506C-E15TAG2',
          kv: '500kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 2806A-E18TAG2 / 2806CE18TAG2',
          kv: '650kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 4006-23TAG3A ',
          kv: '750kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 4006-23TAG3A',
          kv: '800kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 4008-TAG2A',
          kv: '1000kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 4012-46TWG2A',
          kv: '1250kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
        {
          name: 'Perkins 4012-46TAG2A',
          kv: '15000kVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 4000 SERIES',
          c: '4 Stroke'
        },
      ]
    },
    {
      name: 'cummins',
      dataSet: [
        {
          name: 'Cummins 6BTA5.9-G5',
          kv: '100KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, Turbo Charged'
        },
        {
          name: 'Cummins 6BTA5.9-G5',
          kv: '150KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, Turbo Charged'
        },
        {
          name: 'Cummins 6CTAA8.3-G7',
          kv: '200KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins 6CTAA8.3-G7',
          kv: '250KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins QSL9-G5',
          kv: '275KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins QSL9-G5',
          kv: '200KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins NTA855-G4',
          kv: '350KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins QSX15-G4',
          kv: '400KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins QSX15-G8',
          kv: '500KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins VTA28-G5',
          kv: '650KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins QSK23-G3',
          kv: '800KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins QST30-G4',
          kv: '1000KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins KTA50-G3',
          kv: '1250KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins QSK60-G13',
          kv: '1500KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
        {
          name: 'Cummins QSK60-G13',
          kv: '2000KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 cycle, in-line, turbo charged, air to air cooled'
        },
      ]
    },
    {
      name: 'yd',
      dataSet: [
        {
          name: 'Cummins 6BTA5.9-G5',
          kv: '100KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
      ]
    },
    {
      name: 'tazzato',
      dataSet: [
        {
          name: 'Cummins 6BTA5.9-G5',
          kv: '100KVA (Prime)',
          f: '50Hz',
          cp: 'DeepSea 7000 SERIES',
          c: '4 Stroke'
        },
      ]
    },
    {
      name: 'rental',
      dataSet: [
      ]
    },
  ]

  return (
    data.map((item) => {
      return (
        item.name == params.id ?
          <div className='p-10 min-h-[50vh] bg-white' key={item.name}>
            <h3 className='text-2xl text-center font-bold'>
              Generator
            </h3>
            <h1 className='text-4xl capitalize lg:text-6xl lg:p-5 text-center font-extrabold'>
              {params.id}
            </h1>
            <p className='py-5 text-xs text-center'>
              {
                item.name === 'rental' ?
                  'If you need a generator for a temporary or permanent power need, Iconic Energy Solutions is a good option. They offer a wide range of generators from top brands, and they have a team of experts who can help you choose the right generator for your needs. The generators offered for rent by Iconic Energy Solutions are from top brands like Generac, Cummins, and Kohler. They come in a variety of sizes and power outputs to meet different needs.'
                  :
                  `If you are looking for a reliable and powerful generator, a ${params.id} generator is a good option. They are known for their durability, performance, and efficiency, and they are available in a variety of sizes to meet different needs.`
              }
            </p>
            {
              item.name === 'rental' ?
                <div className='py-10 lg:p-10 flex flex-col gap-5'>
                  <ul className='list list-decimal list-inside'>
                    <p className='text-xl font-semibold'>
                      Here are some of the benefits of renting a generator from Iconic Energy Solutions!
                    </p>
                    <li>
                      You don't have to buy a generator, which can be expensive.
                    </li>
                    <li>
                      You only pay for the generator when you need it.
                    </li>
                    <li>
                      Iconic Energy Solutions will deliver and set up the generator for you.
                    </li>
                    <li>
                      They will also provide maintenance and repairs during the rental period.

                    </li>
                  </ul>
                  <ul className='list list-decimal list-inside'>
                    <p className='text-xl font-semibold'>
                      Here are some of the factors to consider when choosing a generator to rent!
                    </p>
                    <li>
                      The size of the generator: The size of the generator will depend on the amount of power you need.
                    </li>
                    <li>
                      The power output of the generator: The power output of the generator will determine what appliances and equipment you can run.
                    </li>
                    <li>
                      The features of the generator: Some generators have features like automatic start, remote start, and fuel shutoff.
                    </li>
                    <li>
                      The price of the rental: The price of the rental will depend on the size, power output, and features of the generator.
                    </li>
                  </ul>
                  <p className='opacity-75 text-xs'>
                    If you want any other kind of information then donot be shy to Contact us
                  </p>
                  <Link href='/contact' className='bg-indigo-500 px-5 py-2 w-fit text-white font-semibold rounded boxShadow'>
                    Contact Us
                  </Link>
                </div> : ''
            }
            <div>
              {
                item.name === 'rental' ?
                  ''
                  :
                  <h3 className='text-xl text-center font-bold'>
                    Availablity criteria
                  </h3>
              }
              <div className="overflow-x-auto flex justify-center items-center flex-col gap-10 py-10">
                {/* <Image src={Img} /> */}
                {
                  item.dataSet.map((ele) => {
                    return (
                      <table className="table lg:max-w-[50vw] bg-slate-100 rounded">
                        {/* head */}
                        <thead className='text-black'>
                          <tr>
                            <th>Name</th>
                            <th>Specifications</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          <tr>
                            <td>{ele.name}</td>
                            <td>{ele.kv}</td>
                          </tr>
                          {/* row 2 */}
                          <tr className="">
                            <td>Frequency</td>
                            <td>{ele.f}</td>
                          </tr>
                          <tr>
                            <td>Control Panel</td>
                            <td>{ele.cp}</td>
                          </tr>
                          <tr>
                            <td>Cycle</td>
                            <td>{ele.c}</td>
                          </tr>
                        </tbody>
                      </table>
                    )
                  })
                }
              </div>
            </div>
          </div>
          :
          ''
      )
    })
  )
}

export default page