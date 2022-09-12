import Image, { StaticImageData } from "next/future/image";

interface BoardMember {
  data: Array<PBCMBoardInfo>;
  coordinators: PBCMBoardInfo[];
}

interface PBCMBoardInfo {
  name?: string;
  photo?: StaticImageData | string;
  altText?: string;
  role?: string;
  category?: string;
}

export default function BoardMembers({ data, coordinators }: BoardMember) {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Board of Directors
            </h2>
            <p className="text-xl text-gray-500">
              Each of you has been blessed with one of God’s many wonderful
              gifts to be used in the service of others. So, use your gift well!
              - 1Peter 4:10 (CEV)
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {data.map((person: PBCMBoardInfo) => (
              <li key={person.name}>
                <div className="space-y-6">
                  {person.photo && person.category === "board_member" ? (
                    <>
                      <Image
                        className="mx-auto h-60 w-48 rounded-md xl:w-60 xl:h-72"
                        src={person.photo ? person.photo : ""}
                        alt={person.altText}
                      />
                      <div className="space-y-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* PBCM Coordinators */}

          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Coordinators
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {coordinators.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <>
                    <Image
                      className="mx-auto h-60 w-48 rounded-xl xl:w-60 xl:h-72"
                      src={person.photo ? person.photo : ""}
                      alt={person.altText}
                    />
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  </>
                </div>
              </li>
            ))}
          </ul>

          {/* PBCM Board Members without Photo's */}

          <ul
            role="list"
            className=" flex flex-col justify-around mx-auto sm:space-y-0 lg:max-w-5xl"
          >
            {" "}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              Other Board Members
            </h2>
            {data.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  {!person.photo ? (
                    <div className="space-y-6 mt-6">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
