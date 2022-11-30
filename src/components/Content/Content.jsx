import React, { useContext } from "react";
import Btn from "../Btn-toggle/btn-toggle";
import { ThemeContext } from "../ThemeContext/themeContext";

export default function Content() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <Btn />
      <h1 className="title">Lorem ipsum dolor sit amet.</h1>
      <p className="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        temporibus suscipit earum tempore quos id, blanditiis adipisci, nisi
        iusto quo illo non assumenda natus necessitatibus dolorem quidem quam
        incidunt aut, minima veritatis delectus nostrum! Aspernatur voluptatibus
        doloremque optio alias illum. Accusantium, iste cum? Ducimus similique
        culpa impedit, neque vero, itaque odit nisi, maiores amet a corrupti
        error necessitatibus. Dolores ipsam ducimus exercitationem quod autem
        consequuntur culpa expedita quae architecto sequi. Voluptate repellendus
        et architecto molestiae provident quisquam similique, tempore earum
        laborum error cupiditate dolore eius nostrum unde optio voluptatum rem,
        saepe ea perferendis veritatis itaque. Aperiam eligendi magnam sequi,
        molestias odio quam impedit quibusdam, omnis quidem, praesentium
        doloribus reprehenderit esse? Reprehenderit atque provident dolores
        consequuntur architecto quibusdam, fugit exercitationem repellendus?
        Amet rerum quisquam commodi minima assumenda tempora, sit veritatis
        laudantium aperiam id eius eum est quibusdam soluta? Aliquid, atque
        tenetur commodi dignissimos expedita pariatur sapiente error dicta
        reiciendis autem, incidunt recusandae? Magnam fugit sapiente repellendus
        illo ab voluptas nihil molestias quia ipsum iure! Sed, esse corrupti.
        Sed aut, consequatur cumque error assumenda, a, corporis quae deserunt
        voluptas rem fugiat obcaecati culpa modi commodi omnis neque fugit
        temporibus libero eveniet ullam. Quisquam dicta similique hic
        distinctio, dolorem alias ex esse laborum, veniam sed corrupti natus,
        cupiditate culpa assumenda? Vel sed sint nostrum ab tempore harum
        ducimus facilis voluptatibus rerum totam itaque quae corporis, pariatur
        rem beatae, error ut est consectetur quaerat. Illum odio, sequi
        voluptatibus optio a possimus, ab culpa sit vero blanditiis hic unde
        officiis asperiores ullam laborum! Cumque accusantium, asperiores unde,
        incidunt vero quo sunt perspiciatis, eum nobis provident eius odit
        ducimus cum aliquam aut? Eligendi molestiae veniam totam, perferendis
        architecto ipsa dolorum, nobis iure enim atque tempore quia voluptates,
        quisquam modi magni a aut ad tenetur ullam inventore. Error, eos modi
        ratione, eum officiis sapiente a reiciendis, at aliquam nostrum tempore.
        Hic modi illo illum itaque a doloremque ut ab quaerat, dolore voluptatem
        officia, deleniti accusamus placeat adipisci labore cumque perferendis
        temporibus, dignissimos in culpa corrupti asperiores perspiciatis
        aperiam. Iste distinctio hic odio enim laboriosam, impedit id eaque non
        quam culpa tempora laborum, repellat beatae earum architecto? Harum
        voluptas a dolores ab porro, recusandae eos magnam illo dolorem numquam
        dicta sapiente beatae. Consequatur voluptatem alias incidunt provident
        nobis possimus labore est, molestiae autem, placeat asperiores vel nisi
        modi itaque vitae temporibus deleniti? Eligendi delectus, quidem
        assumenda quibusdam repellendus labore. Placeat deserunt error
        reiciendis porro corporis at soluta illo mollitia, eaque nihil
        repellendus sapiente! Nobis, quia inventore accusamus atque incidunt ab
        repudiandae iusto cupiditate? Perferendis amet praesentium adipisci
        repellendus magni labore, ipsam quod laboriosam id cumque, perspiciatis
        itaque corrupti illum assumenda ratione earum. Aut qui consequatur ex id
        modi provident, enim quis magnam assumenda voluptatum excepturi? Velit
        ab, eius dicta consectetur adipisci repudiandae voluptatibus praesentium
        maxime obcaecati asperiores nesciunt dolorem tenetur, quaerat corporis
        magni, voluptas nobis quam labore totam eaque at quos ex voluptates eos.
        Itaque aperiam maiores repellendus veniam voluptatum error amet dicta
        dolore sint voluptatem maxime, excepturi culpa cupiditate eum impedit,
        laboriosam obcaecati exercitationem consectetur, quasi possimus?
      </p>
    </>
  );
}
