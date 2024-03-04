import { useState } from "react";
import Modal from "./Modal";
import Spaceship from "./Spaceship";
import { Ship } from "@/util/types/graphql";

function SpaceCardGrid({ ships }: { ships: Ship[] }) {
  const [clickedCardIndex, setClickedCardIndex] = useState<number>(-1);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleCardClick = (ind: number) => {
    setModalOpen(true);
    setClickedCardIndex(ind);
  };
  const handleModalClose = () => {
    setModalOpen(false);
    setClickedCardIndex(-1);
  };
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {ships.map((ship, ind: number) => (
          <Spaceship key={ship.id} ship={ship} handleClick={() => handleCardClick(ind)} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} closeModal={handleModalClose}>
        <>
          <p className="text-4xl font-bold">Missions</p>
          {ships[clickedCardIndex]?.missions?.length ? (
            ships[clickedCardIndex]?.missions?.map((mission, index) => (
              <div key={mission?.flight} className="text-xl w-96 flex py-4">
                <p>{index + 1}.</p>
                <div className="pl-4">
                  <p>Flight - {mission?.flight}</p>
                  <p>Name - {mission?.name}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="my-8">No missions</p>
          )}
        </>
      </Modal>
    </div>
  );
}

export default SpaceCardGrid;
