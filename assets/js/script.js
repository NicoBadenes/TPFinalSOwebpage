// Contenido de los temas
const topics = {
  "concepto": {
    title: "Concepto de Sistemas Operativos",
    content: `
        <p>Un <strong>Sistema Operativo (SO)</strong> es el conjunto de programas que permite que una computadora funcione y que el usuario pueda interactuar con ella. En otras palabras, es el <strong>software principal</strong> que gestiona todos los recursos del sistema —como el procesador, la memoria, los dispositivos de almacenamiento y los periféricos— y coordina la ejecución de otros programas o aplicaciones.</p>

        <p>El sistema operativo actúa como un <strong>intermediario entre el usuario y el hardware</strong>. Por ejemplo, cuando escribimos un documento, el sistema operativo se encarga de que las letras que tecleamos se registren correctamente, de que el archivo se guarde en el disco y de que podamos abrirlo más tarde sin preocuparnos por los detalles técnicos de cómo el hardware realiza esas tareas.</p>

        <p>Entre sus funciones más importantes se encuentran:</p>
        <ul>
        <li><strong>Administrar los recursos del hardware</strong>, distribuyendo el uso del procesador, la memoria y los dispositivos de entrada/salida.</li>
        <li><strong>Ofrecer una interfaz</strong> para que el usuario pueda comunicarse con la computadora, ya sea mediante una interfaz gráfica (como en Windows, macOS o muchas versiones de Linux) o una línea de comandos.</li>
        <li><strong>Gestionar archivos y almacenamiento</strong>, organizando la información en carpetas y controlando el acceso a los datos.</li>
        <li><strong>Controlar la ejecución de programas</strong>, permitiendo que varios procesos se ejecuten al mismo tiempo sin interferir entre sí.</li>
        </ul>

        <p>En resumen, el sistema operativo es el <strong>corazón del sistema informático</strong>. Sin él, el hardware sería inútil, ya que no habría forma sencilla de utilizarlo. Gracias al sistema operativo, las computadoras pueden ejecutar aplicaciones, conectarse a redes, reproducir contenido multimedia y realizar prácticamente cualquier tarea que imaginemos.</p>
    `
    },
  "tipos": {
    title: "Tipos de Sistemas Operativos",
    content: `
        <p>Existen distintos <strong>tipos de sistemas operativos</strong>, y cada uno está diseñado para cumplir funciones específicas según el tipo de dispositivo o las necesidades del usuario. Aunque todos comparten la misma base —administrar recursos y permitir la interacción con el hardware—, se diferencian por su forma de funcionamiento, su estructura y el entorno para el que fueron creados.</p>

        <p>A continuación se presentan los principales tipos:</p>

        <ul>
        <li><strong>Sistemas operativos monousuario y multiusuario:</strong><br>
            Los <strong>monousuario</strong> permiten que solo una persona use el sistema a la vez (como ocurre en muchas computadoras personales). En cambio, los <strong>multiusuario</strong> admiten que varios usuarios trabajen simultáneamente, conectándose a través de una red. Un ejemplo clásico es <strong>Linux</strong>, muy utilizado en servidores.</li>

        <li><strong>Sistemas operativos monotarea y multitarea:</strong><br>
            Un sistema <strong>monotarea</strong> solo puede ejecutar un programa a la vez, mientras que los <strong>multitarea</strong> permiten realizar varias acciones simultáneamente, como escuchar música mientras se navega por Internet o se escribe un documento.</li>

        <li><strong>Sistemas operativos de red:</strong><br>
            Están diseñados para gestionar y coordinar recursos en una <strong>red de computadoras</strong>, facilitando la comunicación, el intercambio de archivos y la administración centralizada. Ejemplos de este tipo son <strong>Windows Server</strong> o <strong>Ubuntu Server</strong>.</li>

        <li><strong>Sistemas operativos distribuidos:</strong><br>
            En este caso, los recursos de varias computadoras se combinan para funcionar como si fueran una sola. El sistema distribuye las tareas entre los distintos equipos, aumentando la eficiencia y la velocidad de procesamiento.</li>

        <li><strong>Sistemas operativos en tiempo real:</strong><br>
            Estos se usan en entornos donde las respuestas deben ser <strong>rápidas y precisas</strong>, sin margen de error ni demoras. Se aplican, por ejemplo, en la industria, en sistemas de control de tráfico aéreo o en equipos médicos.</li>

        <li><strong>Sistemas operativos móviles:</strong><br>
            Están diseñados para dispositivos como <strong>teléfonos, tablets o relojes inteligentes</strong>. Son más ligeros y adaptados a pantallas táctiles. Algunos ejemplos son <strong>Android</strong> y <strong>iOS</strong>.</li>
        </ul>

        <p>En conclusión, los tipos de sistemas operativos varían según el contexto en el que se usen, pero todos comparten un mismo propósito: <strong>optimizar el funcionamiento del hardware y facilitar el trabajo del usuario</strong>.</p>
    `
    },
  "firmware": {
    title: "Firmware",
    content: `
        <p>El <strong>firmware</strong> es un tipo especial de software que se encuentra grabado directamente en el <strong>hardware</strong> de un dispositivo y que cumple la función de controlar su funcionamiento básico. Podríamos decir que es una combinación entre hardware y software, ya que forma parte física del dispositivo, pero contiene instrucciones programadas que le indican cómo debe operar.</p>

        <p>A diferencia de los programas que instalamos o desinstalamos fácilmente en una computadora, el firmware <strong>no se elimina ni se modifica con frecuencia</strong>, ya que está almacenado en una memoria especial llamada <strong>memoria ROM</strong> (o en algunos casos, memoria flash). Este software es esencial para que el dispositivo pueda iniciar, reconocer sus componentes y ejecutar las órdenes que el usuario o el sistema operativo le envían.</p>

        <p>Por ejemplo, todos los aparatos electrónicos —como los <strong>teléfonos, routers, televisores, impresoras o placas madre</strong>— tienen firmware. En una computadora, el firmware más conocido es el <strong>BIOS</strong> o <strong>UEFI</strong>, que se encarga de iniciar el sistema y comprobar que todos los componentes funcionen correctamente antes de que arranque el sistema operativo.</p>

        <p>Además, muchos fabricantes lanzan <strong>actualizaciones de firmware</strong> para mejorar el rendimiento de sus dispositivos, corregir errores o añadir nuevas funciones. Sin embargo, estas actualizaciones deben realizarse con cuidado, ya que un error durante el proceso puede dejar el dispositivo inutilizable.</p>

        <p>En resumen, el firmware es el <strong>cerebro oculto del hardware</strong>, el conjunto de instrucciones que permite que cada componente electrónico se comunique correctamente con el resto del sistema y cumpla su función de manera eficiente.</p>
    `
    },
  "bios-uefi": {
    title: "BIOS vs UEFI",
    content: `
        <p>La <strong>BIOS</strong> (Basic Input/Output System) y la <strong>UEFI</strong> (Unified Extensible Firmware Interface) son dos tipos de software fundamentales que se ejecutan <strong>antes de que el sistema operativo se inicie</strong>. Su función principal es preparar el hardware de la computadora para que todo esté listo al momento de arrancar el sistema.</p>

        <p>La <strong>BIOS</strong> es el sistema más antiguo. Se desarrolló en los años 80 y fue durante mucho tiempo el estándar en casi todas las computadoras. Al encender el equipo, la BIOS realiza una serie de pruebas llamadas <strong>POST (Power-On Self Test)</strong>, donde verifica que los componentes esenciales —como la memoria RAM, el teclado, el disco duro o la tarjeta gráfica— estén funcionando correctamente. Luego busca en qué dispositivo está instalado el sistema operativo (por ejemplo, el disco o una memoria USB) y lo inicia. Su interfaz es simple, de tipo texto, y se maneja generalmente con el teclado.</p>

        <p>Con el tiempo, surgió la <strong>UEFI</strong> como una versión más moderna y avanzada de la BIOS. Aunque cumple el mismo propósito, ofrece <strong>una interfaz gráfica más amigable</strong>, soporte para <strong>ratón</strong>, y la posibilidad de manejar <strong>discos duros de mayor capacidad</strong> y sistemas con más de 2 TB. Además, UEFI permite <strong>un arranque más rápido</strong>, mayor seguridad gracias a funciones como el <strong>Secure Boot</strong>, y es más flexible a la hora de actualizar o incorporar nuevos dispositivos.</p>

        <p>En resumen, tanto la BIOS como la UEFI son el <strong>primer paso del arranque de una computadora</strong>: son las encargadas de despertar el hardware y de dar inicio al sistema operativo. La BIOS representa el enfoque tradicional y básico, mientras que la UEFI es su evolución moderna, pensada para los equipos actuales y futuros.</p>
    `
    },
  "particion": {
    title: "Partición de Disco",
    content: `
        <p>Una <strong>partición de disco</strong> es una <strong>división lógica</strong> que se realiza dentro de un disco duro o unidad de almacenamiento. Aunque físicamente el disco sea uno solo, al crear particiones se pueden <strong>separar sus espacios en varias secciones independientes</strong>, cada una de las cuales puede funcionar como si fuera un disco diferente.</p>

        <p>El objetivo principal de una partición es <strong>organizar y gestionar mejor la información</strong>. Por ejemplo, se puede tener una partición para el sistema operativo, otra para los programas y una tercera para los archivos personales. De esta forma, si el sistema necesita ser reinstalado, los datos guardados en las otras particiones pueden mantenerse a salvo.</p>

        <p>Cada partición puede tener su propio <strong>sistema de archivos</strong>, como <strong>NTFS, FAT32 o ext4</strong>, según el sistema operativo que se use. Además, cuando un disco está particionado, a cada sección se le asigna una <strong>letra o punto de montaje</strong> (por ejemplo, “C:” en Windows o “/home” en Linux), lo que permite acceder fácilmente a los datos que contiene.</p>

        <p>Existen distintos tipos de particiones:</p>
        <ul>
        <li><strong>Primarias:</strong> son las principales, y desde una de ellas se inicia el sistema operativo.</li>
        <li><strong>Extendidas y lógicas:</strong> permiten crear más particiones dentro de una misma unidad cuando se supera el límite de particiones primarias.</li>
        </ul>

        <p>En los sistemas modernos, el esquema de particionado <strong>GPT (GUID Partition Table)</strong> ha reemplazado al antiguo <strong>MBR (Master Boot Record)</strong>, ofreciendo mayor seguridad y compatibilidad con discos de gran capacidad.</p>

        <p>En resumen, una partición de disco es una manera práctica de <strong>dividir y organizar el espacio de almacenamiento</strong>, facilitando la administración de datos, la instalación de múltiples sistemas operativos y la protección de la información personal frente a fallos o reinstalaciones.</p>
    `
    },
  "servicios": {
    title: "Servicios en el Sistema Operativo",
    content: `
        <p>Los <strong>servicios en un sistema operativo</strong> son programas o procesos que se ejecutan <strong>de manera continua en segundo plano</strong>, sin que el usuario tenga que iniciarlos manualmente. Su función es realizar tareas esenciales para el correcto funcionamiento del sistema y de las aplicaciones, garantizando que todo opere de forma estable, segura y eficiente.</p>

        <p>Estos servicios se activan generalmente <strong>cuando la computadora se enciende</strong> y permanecen trabajando mientras el sistema está en uso. Aunque no siempre sean visibles, son fundamentales para que el sistema responda correctamente a las acciones del usuario.</p>

        <p>Algunos ejemplos comunes de servicios son:</p>
        <ul>
        <li><strong>Administración de red:</strong> permite la conexión a Internet y a redes locales.</li>
        <li><strong>Gestión de impresión:</strong> controla las colas de impresión y comunica la computadora con las impresoras.</li>
        <li><strong>Actualizaciones automáticas:</strong> se encarga de buscar, descargar e instalar actualizaciones del sistema o de las aplicaciones.</li>
        <li><strong>Seguridad y antivirus:</strong> protege el equipo frente a amenazas y analiza archivos en segundo plano.</li>
        <li><strong>Sincronización de hora y fecha:</strong> mantiene el reloj del sistema correctamente ajustado.</li>
        </ul>

        <p>Los servicios son gestionados por el propio sistema operativo, que puede <strong>iniciarlos, detenerlos o reiniciarlos</strong> según sea necesario. En sistemas como Windows, esto se hace desde el "Administrador de servicios", mientras que en Linux se utilizan herramientas como <code>systemd</code> o <code>service</code>.</p>

        <p>En conclusión, los servicios son el <strong>motor silencioso del sistema operativo</strong>: trabajan detrás de escena para que todas las funciones —desde la conexión a Internet hasta la seguridad y el rendimiento— se mantengan activas sin que el usuario tenga que intervenir directamente.</p>
    `
    },
  "kernel": {
    title: "Kernel",
    content: `
        <p>El <strong>kernel</strong> (o núcleo) es la <strong>parte central del sistema operativo</strong>, el componente que actúa como intermediario directo entre el <strong>hardware</strong> y el <strong>software</strong>. Su función principal es gestionar los recursos del sistema —como el procesador, la memoria, los dispositivos de entrada y salida, y el almacenamiento—, asegurándose de que todos los programas puedan usarlos de forma ordenada y eficiente.</p>

        <p>Podemos imaginar al kernel como el “cerebro” del sistema operativo. Cada vez que una aplicación necesita realizar una tarea que involucra al hardware (por ejemplo, guardar un archivo o mostrar una imagen en pantalla), esa solicitud pasa primero por el kernel. Él se encarga de <strong>controlar, traducir y ejecutar las instrucciones</strong>, garantizando que ningún programa interfiera con otro y que los recursos se distribuyan correctamente.</p>

        <p>Entre sus principales funciones se encuentran:</p>
        <ul>
        <li><strong>Administrar la memoria</strong>, asignando y liberando espacio para los procesos que lo necesiten.</li>
        <li><strong>Controlar los procesos</strong>, decidiendo cuáles se ejecutan, en qué momento y durante cuánto tiempo.</li>
        <li><strong>Gestionar los dispositivos</strong>, comunicándose con los controladores (drivers) para permitir que el sistema interactúe con el hardware.</li>
        <li><strong>Mantener la seguridad y estabilidad del sistema</strong>, evitando accesos no permitidos o fallos que puedan afectar el funcionamiento general.</li>
        </ul>

        <p>Existen diferentes tipos de kernels, como el <strong>monolítico</strong>, que integra la mayoría de sus funciones en un solo bloque (usado en sistemas como Linux), o el <strong>microkernel</strong>, que divide las tareas en módulos más pequeños e independientes (como en algunos sistemas modernos).</p>

        <p>En resumen, el kernel es el <strong>núcleo vital del sistema operativo</strong>: coordina todo lo que ocurre dentro de la computadora y hace posible que el hardware y el software trabajen juntos de manera armónica y segura.</p>
    `
    },
  "procesos": {
    title: "Gestión de Procesos",
    content: `
    <p>La <strong>gestión de procesos</strong> es una de las funciones más importantes del sistema operativo, ya que se encarga de <strong>administrar todos los programas que están en ejecución</strong>. Cada programa que abrimos —ya sea un navegador, un editor de texto o incluso una herramienta del propio sistema— se convierte en un <strong>proceso</strong>, y el sistema operativo debe controlar qué hace cada uno, cuándo lo hace y con qué recursos cuenta.</p>

    <p>Un <strong>proceso</strong> puede definirse como un programa en funcionamiento. No solo incluye el código del programa, sino también la información necesaria para su ejecución, como los datos que utiliza, el estado actual (en qué parte del código está trabajando) y los recursos que tiene asignados (memoria, tiempo de CPU, etc.).</p>

    <p>La gestión de procesos tiene varias tareas clave:</p>
    <ul>
        <li><strong>Creación y finalización de procesos:</strong> el sistema operativo crea un proceso cuando un programa se ejecuta, y lo elimina cuando termina su trabajo o cuando el usuario lo cierra.</li>
        <li><strong>Planificación:</strong> como el procesador solo puede ejecutar una instrucción a la vez, el sistema operativo decide qué proceso se ejecuta primero y por cuánto tiempo. Esto se conoce como <strong>planificación de la CPU</strong>, y permite que varios programas funcionen aparentemente al mismo tiempo (multitarea).</li>
        <li><strong>Cambio de contexto:</strong> cuando el sistema interrumpe un proceso para dar paso a otro, guarda su estado actual para que pueda reanudarse más tarde exactamente donde se detuvo.</li>
        <li><strong>Comunicación entre procesos:</strong> algunos programas necesitan intercambiar información entre sí (por ejemplo, un navegador que le pide datos al sistema de red). El sistema operativo gestiona esta comunicación de forma segura.</li>
        <li><strong>Sincronización y bloqueo:</strong> controla el acceso a los recursos compartidos para evitar errores o conflictos, asegurando que los procesos no interfieran entre sí.</li>
    </ul>

    <p>En resumen, la gestión de procesos es lo que <strong>mantiene vivo y ordenado al sistema operativo</strong>. Gracias a ella, múltiples tareas pueden ejecutarse simultáneamente, los recursos se distribuyen equitativamente y el usuario experimenta un funcionamiento fluido, sin notar el complejo trabajo de coordinación que ocurre en segundo plano.</p>
    `
    },
  "memoria": {
    title: "Gestión de Memoria",
    content: `
        <p>La <strong>gestión de memoria</strong> es una de las funciones esenciales del sistema operativo, encargada de <strong>administrar y controlar el uso de la memoria principal (RAM)</strong> mientras el sistema está en funcionamiento. Su objetivo es asegurar que <strong>cada proceso tenga el espacio que necesita</strong> para ejecutarse correctamente, evitando conflictos y aprovechando al máximo los recursos disponibles.</p>

        <p>Cada vez que un programa se abre, el sistema operativo le asigna una parte de la memoria RAM para guardar sus datos e instrucciones. Cuando el programa se cierra, esa memoria se libera para que pueda ser utilizada por otros procesos. Todo este proceso ocurre de manera automática y coordinada por el sistema operativo.</p>

        <p>Las tareas más importantes de la gestión de memoria son:</p>
        <ul>
        <li><strong>Asignación y liberación de memoria:</strong> el sistema operativo otorga espacio a los programas cuando lo solicitan y lo recupera cuando ya no se necesita.</li>
        <li><strong>Protección de memoria:</strong> garantiza que un proceso no pueda acceder a la memoria de otro, evitando errores o daños al sistema.</li>
        <li><strong>Memoria virtual:</strong> cuando la RAM se llena, el sistema puede usar una parte del disco duro como una extensión temporal de la memoria. Esto permite ejecutar más programas de los que físicamente cabrían en la RAM, aunque con menor velocidad.</li>
        <li><strong>Seguimiento del uso de memoria:</strong> el sistema lleva un registro de qué partes de la memoria están ocupadas, cuáles están libres y qué procesos las están utilizando.</li>
        <li><strong>Intercambio o paginación:</strong> si es necesario, el sistema operativo puede mover temporalmente partes de un programa desde la RAM al disco y viceversa, optimizando el espacio disponible.</li>
        </ul>

        <p>En resumen, la gestión de memoria permite que <strong>los programas se ejecuten de manera eficiente y estable</strong>, evitando que el sistema se bloquee o se quede sin recursos. Gracias a este control, el usuario puede tener abiertas múltiples aplicaciones a la vez sin notar directamente el complejo trabajo de organización que el sistema operativo realiza en segundo plano.</p>
    `
    },
  "dispositivos": {
    title: "Gestión de Dispositivos E/S",
    content: `
        <p>La <strong>gestión de dispositivos de entrada/salida (E/S)</strong> es una función fundamental del sistema operativo que se encarga de <strong>controlar y coordinar todos los dispositivos que permiten la comunicación entre el usuario, el sistema y el hardware</strong>. Los dispositivos de entrada incluyen el teclado, el mouse, el micrófono y escáneres; los de salida incluyen la pantalla, impresoras y altavoces; y algunos, como los discos duros o las tarjetas de red, pueden actuar como entrada y salida al mismo tiempo.</p>

        <p>El sistema operativo <strong>funciona como intermediario</strong> entre los programas y los dispositivos, de modo que las aplicaciones no necesitan conocer los detalles internos del hardware. Por ejemplo, cuando un usuario imprime un documento, el sistema operativo traduce las instrucciones del programa en señales que la impresora puede entender y ejecutar correctamente.</p>

        <p>Entre las tareas principales de la gestión de E/S se encuentran:</p>
        <ul>
        <li><strong>Control de dispositivos:</strong> el sistema operativo utiliza <strong>controladores o drivers</strong>, que son programas especializados que permiten que el hardware y el software se comuniquen sin conflictos.</li>
        <li><strong>Programación de acceso a los dispositivos:</strong> muchos dispositivos solo pueden atender un pedido a la vez, por lo que el sistema operativo organiza las solicitudes de manera que todos los procesos reciban atención de forma ordenada.</li>
        <li><strong>Almacenamiento en búfer y cache:</strong> para optimizar la velocidad y eficiencia, el sistema puede almacenar temporalmente datos en memoria intermedia antes de enviarlos al dispositivo de destino.</li>
        <li><strong>Detección y manejo de errores:</strong> el sistema supervisa que los dispositivos funcionen correctamente y notifica problemas o fallos, permitiendo soluciones automáticas o alertando al usuario.</li>
        <li><strong>Comunicación con aplicaciones:</strong> proporciona <strong>interfaces estandarizadas</strong> que permiten a los programas interactuar con cualquier dispositivo compatible, sin necesidad de programar para cada modelo específico.</li>
        </ul>

        <p>En resumen, la gestión de dispositivos de entrada y salida es el <strong>puente entre el hardware y las aplicaciones</strong>, garantizando que los periféricos funcionen de manera eficiente, segura y coordinada. Gracias a esta función, los usuarios pueden interactuar con la computadora sin preocuparse por los detalles técnicos de cada dispositivo.</p>
    `
    },
  "archivos": {
    title: "Gestión de Archivos",
    content: `
    <p>La <strong>gestión de archivos</strong> es una función esencial del sistema operativo que se encarga de <strong>organizar, almacenar, acceder y proteger toda la información que se guarda en los dispositivos de almacenamiento</strong>, como discos duros, SSD, memorias USB o tarjetas de memoria. Gracias a esta función, los usuarios y los programas pueden trabajar con archivos de manera sencilla y segura, sin necesidad de conocer los detalles internos del almacenamiento físico.</p>

    <p>Entre las principales tareas de la gestión de archivos se encuentran:</p>
    <ul>
        <li><strong>Creación y eliminación de archivos:</strong> el sistema operativo permite generar nuevos archivos y carpetas, así como borrarlos cuando ya no se necesitan.</li>
        <li><strong>Organización de archivos:</strong> mantiene los archivos ordenados en <strong>directorios o carpetas</strong>, facilitando su localización y acceso rápido.</li>
        <li><strong>Lectura y escritura:</strong> controla cómo se guardan los datos en el dispositivo y cómo se recuperan cuando se necesitan, asegurando que la información no se corrompa.</li>
        <li><strong>Control de acceso y seguridad:</strong> asigna permisos de lectura, escritura o ejecución a los usuarios y procesos, protegiendo los archivos frente a accesos no autorizados.</li>
        <li><strong>Gestión del espacio en disco:</strong> supervisa qué sectores del disco están ocupados y cuáles están libres, optimizando el uso del almacenamiento y evitando pérdidas de información.</li>
        <li><strong>Soporte de distintos sistemas de archivos:</strong> permite trabajar con formatos como <strong>NTFS, FAT32, exFAT, ext4</strong>, entre otros, según el sistema operativo y el dispositivo.</li>
    </ul>

    <p>En resumen, la gestión de archivos es el <strong>sistema que mantiene organizada y segura toda la información</strong> en un computador. Sin esta función, los datos estarían desordenados y sería muy difícil acceder a ellos, almacenar nuevos archivos de manera eficiente o protegerlos frente a pérdidas o accesos indebidos.</p>
    `
    },
    "seguridad": {
    title: "Seguridad y Protección",
    content: `
        <p>La <strong>gestión de seguridad y protección</strong> es una función fundamental del sistema operativo que se encarga de <strong>proteger los datos, los recursos del sistema y la integridad de los procesos</strong> frente a errores, accesos no autorizados o amenazas externas. Gracias a esta función, el sistema puede operar de manera confiable, garantizando que tanto los programas como los usuarios cumplan con las reglas establecidas para acceder y utilizar los recursos.</p>

        <p>Entre las principales tareas de la gestión de seguridad y protección se incluyen:</p>
        <ul>
        <li><strong>Control de acceso:</strong> el sistema operativo determina quién puede acceder a qué recursos mediante <strong>usuarios, contraseñas y permisos</strong>. Por ejemplo, solo ciertos usuarios pueden modificar archivos sensibles o instalar programas.</li>
        <li><strong>Protección de memoria y procesos:</strong> evita que un proceso interfiera con otro o acceda a áreas de memoria que no le corresponden, garantizando la estabilidad y evitando fallos del sistema.</li>
        <li><strong>Autenticación:</strong> verifica la identidad de los usuarios mediante contraseñas, tarjetas inteligentes o sistemas biométricos, asegurando que solo personas autorizadas puedan utilizar el equipo o acceder a datos importantes.</li>
        <li><strong>Registro y monitoreo de actividades:</strong> algunos sistemas mantienen un <strong>registro de eventos</strong> que permite detectar intentos de acceso no autorizados, errores o comportamientos sospechosos.</li>
        <li><strong>Prevención de amenazas:</strong> trabaja junto con software antivirus, firewalls y otros mecanismos de seguridad para proteger el sistema contra virus, malware y ataques externos.</li>
        <li><strong>Cifrado de información:</strong> en ciertos casos, el sistema operativo puede proteger los datos mediante técnicas de cifrado, evitando que sean leídos o modificados por personas no autorizadas.</li>
        </ul>

        <p>En resumen, la gestión de seguridad y protección es como un <strong>guardián silencioso del sistema operativo</strong>: mantiene la integridad de los datos, asegura que los recursos se usen correctamente y protege al usuario frente a riesgos internos y externos. Sin esta función, la computadora sería vulnerable a errores, fallos y ataques maliciosos.</p>
    `
    },
  "comunicaciones": {
    title: "Gestión de Comunicaciones",
    content: `
        <p>La <strong>gestión de comunicaciones</strong> es una función del sistema operativo que se encarga de <strong>coordinar y facilitar el intercambio de información</strong> entre procesos dentro de la misma computadora o entre diferentes computadoras conectadas en una red. Gracias a esta función, los programas pueden <strong>interactuar de manera segura y eficiente</strong>, y los usuarios pueden compartir datos, acceder a servicios remotos y trabajar en entornos conectados.</p>

        <p>Entre las principales tareas de la gestión de comunicaciones se incluyen:</p>
        <ul>
        <li><strong>Comunicación entre procesos (IPC – Inter-Process Communication):</strong> permite que dos o más programas en la misma computadora intercambien información de manera controlada, utilizando mecanismos como <strong>tuberías (pipes), colas de mensajes o memoria compartida</strong>.</li>
        <li><strong>Gestión de redes:</strong> controla el acceso a recursos de red, como Internet o redes locales, y facilita que los programas se comuniquen con otros dispositivos mediante protocolos estandarizados.</li>
        <li><strong>Transmisión de datos segura y confiable:</strong> el sistema operativo supervisa que la información enviada llegue correctamente a su destino y que los errores en la transmisión se detecten y corrijan.</li>
        <li><strong>Sincronización:</strong> coordina el envío y la recepción de datos entre procesos o computadoras, evitando conflictos y asegurando que la información se procese en el orden adecuado.</li>
        <li><strong>Soporte para servicios distribuidos:</strong> permite que varias computadoras trabajen juntas como un sistema único, compartiendo recursos y tareas de manera eficiente.</li>
        </ul>

        <p>En resumen, la gestión de comunicaciones es el <strong>puente que conecta procesos y computadoras</strong>, asegurando que los datos fluyan correctamente, de forma segura y organizada. Sin esta función, sería imposible trabajar en red, compartir información o coordinar programas que dependen unos de otros dentro de un sistema.</p>
    `
    },
  "recursos": {
    title: "Gestión de Recursos",
    content: `
        <p>La <strong>gestión de recursos</strong> es una función clave del sistema operativo que se encarga de <strong>administrar y distribuir todos los recursos del sistema</strong>, como el procesador, la memoria, el almacenamiento y los dispositivos de entrada/salida, de manera eficiente y justa entre los distintos programas y usuarios. Gracias a esta función, el sistema puede funcionar de manera estable, evitando conflictos y asegurando que todos los procesos tengan lo que necesitan para ejecutarse correctamente.</p>

        <p>Entre las principales tareas de la gestión de recursos se incluyen:</p>
        <ul>
        <li><strong>Asignación de recursos:</strong> el sistema operativo decide qué proceso recibe qué cantidad de CPU, memoria, espacio en disco o acceso a dispositivos en cada momento.</li>
        <li><strong>Planificación y priorización:</strong> cuando varios procesos compiten por el mismo recurso, el sistema determina el orden de acceso y establece prioridades para optimizar el rendimiento.</li>
        <li><strong>Monitoreo del uso de recursos:</strong> registra cómo se están utilizando los recursos, detectando posibles cuellos de botella o procesos que consumen más de lo permitido.</li>
        <li><strong>Optimización de recursos:</strong> busca aprovechar al máximo los recursos disponibles, evitando desperdicios y asegurando que los procesos menos críticos no bloqueen a los más importantes.</li>
        <li><strong>Prevención de conflictos:</strong> controla que los procesos no interfieran entre sí ni accedan a recursos que no les corresponden, manteniendo la estabilidad y seguridad del sistema.</li>
        </ul>

        <p>En resumen, la gestión de recursos es como el <strong>director de orquesta del sistema operativo</strong>: coordina todos los elementos del computador para que trabajen en armonía, asegurando que los programas se ejecuten de manera eficiente y que los usuarios puedan aprovechar al máximo la capacidad del sistema.</p>
    `
    },
  "interfaz": {
    title: "Interfaz con el Usuario",
    content: `
    <p>La <strong>gestión de la interfaz de usuario</strong> es la función del sistema operativo que se encarga de <strong>proporcionar un medio mediante el cual el usuario puede interactuar con la computadora y sus programas</strong>. Gracias a esta función, las acciones del usuario —como abrir aplicaciones, escribir, mover archivos o cambiar configuraciones— se traducen en instrucciones que el sistema operativo y el hardware pueden entender y ejecutar correctamente.</p>

    <p>Existen principalmente dos tipos de interfaz:</p>
    <ul>
        <li><strong>Interfaz de línea de comandos (CLI, Command Line Interface):</strong> permite al usuario comunicarse con el sistema escribiendo comandos de texto. Es muy poderosa y flexible, aunque requiere conocimientos específicos del lenguaje de comandos del sistema. Ejemplos son la terminal de Linux o el Símbolo del sistema en Windows.</li>
        <li><strong>Interfaz gráfica de usuario (GUI, Graphical User Interface):</strong> utiliza <strong>ventanas, iconos, menús y botones</strong> que facilitan la interacción de manera visual y más intuitiva. La mayoría de los sistemas modernos, como Windows, macOS o muchas distribuciones de Linux, utilizan GUI.</li>
    </ul>

    <p>Las principales tareas de la gestión de la interfaz de usuario incluyen:</p>
    <ul>
        <li><strong>Interpretar las acciones del usuario:</strong> reconoce movimientos del mouse, teclas presionadas y gestos táctiles, y los convierte en comandos que el sistema puede ejecutar.</li>
        <li><strong>Mostrar información:</strong> presenta resultados, mensajes de error, notificaciones y contenido de manera clara y accesible.</li>
        <li><strong>Coordinar la interacción con las aplicaciones:</strong> asegura que los programas respondan correctamente a las acciones del usuario y que la información se muestre en pantalla sin conflictos.</li>
        <li><strong>Personalización:</strong> permite al usuario modificar aspectos visuales y de funcionamiento, como fondos de pantalla, temas de color, disposición de ventanas o atajos de teclado.</li>
    </ul>

    <p>En resumen, la gestión de la interfaz de usuario es el <strong>puente entre la persona y la computadora</strong>, haciendo posible que el usuario controle el sistema de manera intuitiva y eficiente, mientras el sistema operativo traduce esas acciones en operaciones sobre el hardware y los recursos del sistema.</p>
    `
    },
};

// Comandos válidos
const validCommands = {
  "help": () => {
    const cmds = Object.keys(topics).join(", ");
    return `Comandos disponibles:\n${cmds}\n\nEjemplo: escribe "kernel" y presiona Enter.\nTambién puedes usar "clear" o "exit".`;
  },
  "clear": () => {
    document.getElementById("output").innerHTML = "";
    return "";
  },
  "exit": () => {
    return "Saliendo del modo terminal...";
  }
};

// Elementos DOM
const output = document.getElementById("output");
const input = document.getElementById("command-input");
const terminal = document.getElementById("terminal");
const contentContainer = document.getElementById("content-container");
const topicTitle = document.getElementById("topic-title");
const topicContent = document.getElementById("topic-content");
const backBtn = document.getElementById("back-btn");

// Mostrar mensaje inicial
output.innerHTML += "Bienvenido a la Terminal Educativa de Sistemas Operativos.\n";
output.innerHTML += 'Escribe "help" para ver los comandos disponibles.\n';

// Enfocar al cargar
input.focus();

// Variables globales para manejar el input visual
let currentCommand = "";
const currentCommandSpan = document.getElementById("current-command");
const cursorSpan = document.getElementById("cursor");

// Manejar comandos
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = currentCommand.trim().toLowerCase();
    currentCommand = "";
    currentCommandSpan.textContent = "";

    if (!cmd) return;

    // Mostrar comando en la terminal
    output.innerHTML += `<span class="prompt">JoseSanchez@so-terminal:~$ </span> ${cmd}<br>`;

    if (validCommands[cmd]) {
      const res = validCommands[cmd]();
      if (res) output.innerHTML += res + "<br>";
      if (cmd === "exit") {
        setTimeout(() => location.reload(), 1000);
      }
    } else if (topics[cmd]) {
      topicTitle.textContent = topics[cmd].title;
      topicContent.innerHTML = topics[cmd].content;
      terminal.classList.add("hidden");
      contentContainer.classList.remove("hidden");
    } else {
      output.innerHTML += `<span style="color: var(--error);">Command not found: ${cmd}.</span><br>`;
    }

    // Scroll automático
    terminal.scrollTop = terminal.scrollHeight;

    // Reiniciar el cursor y el input visual
    cursorSpan.style.visibility = "visible";
    input.focus();

  } else if (e.key === "Backspace") {
    if (currentCommand.length > 0) {
      currentCommand = currentCommand.slice(0, -1);
      currentCommandSpan.textContent = currentCommand;
    }
  } else if (e.key.length === 1) {
    currentCommand += e.key;
    currentCommandSpan.textContent = currentCommand;
  }

  // Evitar comportamiento predeterminado del input (como mover el cursor)
  e.preventDefault();
});

// Enfocar el input al cargar
input.focus();

// Volver a la terminal
backBtn.addEventListener("click", () => {
  contentContainer.classList.add("hidden");
  terminal.classList.remove("hidden");
  input.focus();
});
