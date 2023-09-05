import React from 'react'
import Img from "../../assets/gen.png";
import Image from 'next/image';

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
      name: 'Rental',
      dataSet: [
      ]
    },
  ]

  return (
    data.map((item) => {
      return (
        item.name == params.id ?
          <div className='p-10 min-h-screen bg-white' key={item.name}>
            <h3 className='text-2xl text-center font-bold'>
              Generator
            </h3>
            <h1 className='text-4xl capitalize lg:text-6xl p-5 text-center font-extrabold'>
              {params.id}
            </h1>
            <p className='p-5 text-xs text-center'>
              If you are looking for a reliable and powerful generator, a {params.id} generator is a good option. They are known for their durability, performance, and efficiency, and they are available in a variety of sizes to meet different needs.
            </p>
            <div>
              <h3 className='text-xl text-center font-bold'>
                Availablity criteria
              </h3>
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