import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="w-[1250px] m-auto">
        <div className="flex items-center gap-4">
          <button className="btn btn-sm btn-primary normal-case my-4">
            Kembali
          </button>
          <div className="text-xs breadcrumbs">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>Add Document</li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4 bg-red-100">
            <Image
              src="https://picsum.photos/500/500"
              alt=""
              className="rounded-2xl"
              width={350}
              height={350}
            />
            <div className="flex gap-2 mt-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <Image
                  key={index}
                  src="https://picsum.photos/500/500"
                  alt=""
                  className="rounded-md"
                  width={60}
                  height={60}
                />
              ))}
            </div>
          </div>
          <div className="w-2/4 bg-blue-100 px-8 py-6">
            <h1 className="tracking-tight text-xl font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, consectetur delectus.
            </h1>
            <p className="tracking-tight text-3xl font-bold mt-2">Rp 5.000</p>
            <div className="h-0.5 bg-neutral-400 my-4"></div>
            <div className="category space-y-1 font-normal">
              <p>Kategori : lorem</p>
              <p>Keterangan : lorem</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo itaque maxime in, laudantium consequatur quis eos hic
                omnis harum provident cum nemo vero sapiente corporis debitis
                voluptatibus ipsa nobis ut error, animi temporibus nesciunt
                labore ex. Reprehenderit a voluptatum tenetur, maiores eos
                sapiente omnis, ut illo facilis asperiores perferendis
                accusantium.
              </p>
            </div>
          </div>
          <div className="w-1/4 bg-green-100 ">
            <div className="flex p-4 items-center border rounded-lg border-neutral-400">
              <Image
                src="https://picsum.photos/50/50"
                alt=""
                className="rounded-full"
                width={50}
                height={50}
              />
              <div className="ml-2 w-full space-y-1">
                <h2 className="text-sm">Lorem, ipsum dolor.</h2>
                <button className="btn btn-xs w-full normal-case">
                  Follow
                </button>
              </div>
            </div>
            <div className="p-4 border rounded-lg border-neutral-400 mt-4">
              <h2 className="text-center font-bold tracking-tight text-xl mb-2">
                Pembelian
              </h2>
              <div className="flex justify-between">
                <button className="btn btn-neutral w-[8.5rem] normal-case">
                  Chat
                </button>
                <button className="btn btn-neutral w-[8.5rem] normal-case">
                  + Keranjang
                </button>
              </div>
              <button className="btn btn-primary w-full normal-case mt-2">
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
