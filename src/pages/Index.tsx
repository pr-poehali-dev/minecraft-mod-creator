import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentView, setCurrentView] = useState('landing');

  const tutorials = [
    {
      title: 'Создание первого мода',
      description: 'Изучите основы создания модов: настройка среды, первый блок',
      difficulty: 'Новичок',
      time: '30 мин',
      icon: 'BookOpen'
    },
    {
      title: 'Хардвар и оборудование',
      description: 'Создание компьютеров, машин и технических устройств',
      difficulty: 'Средний',
      time: '60 мин',
      icon: 'Cpu'
    },
    {
      title: 'Дизайн скинов',
      description: 'Создание уникальных скинов для персонажей',
      difficulty: 'Новичок',
      time: '45 мин',
      icon: 'Palette'
    },
    {
      title: 'Строительство домов',
      description: 'Архитектура и дизайн красивых построек',
      difficulty: 'Средний',
      time: '75 мин',
      icon: 'Home'
    }
  ];

  const templates = [
    {
      title: 'Мод на мебель',
      description: 'Готовый шаблон с кроватями, столами, стульями',
      category: 'Декор',
      downloads: '12.3k',
      icon: 'Home'
    },
    {
      title: 'Компьютерный хардвар',
      description: 'Процессоры, мониторы, серверы для игры',
      category: 'Техника',
      downloads: '8.7k',
      icon: 'Cpu'
    },
    {
      title: 'Коллекция скинов',
      description: 'Рыцари, маги, современные персонажи',
      category: 'Скины',
      downloads: '15.1k',
      icon: 'Palette'
    },
    {
      title: 'Проекты домов',
      description: 'Средневековые замки, современные виллы',
      category: 'Строительство',
      downloads: '9.2k',
      icon: 'Building'
    }
  ];

  const features = [
    {
      title: 'Создать мод',
      description: 'Разработка модификаций для игры',
      icon: 'Code',
      action: () => setCurrentView('main')
    },
    {
      title: 'Создать хардвар',
      description: 'Проектирование игрового оборудования',
      icon: 'Cpu',
      action: () => setCurrentView('main')
    },
    {
      title: 'Создать скин',
      description: 'Дизайн персонажей и внешнего вида',
      icon: 'Palette',
      action: () => setCurrentView('main')
    },
    {
      title: 'Обучение домам',
      description: 'Туториалы по строительству домов',
      icon: 'Home',
      action: () => setCurrentView('main')
    }
  ];

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-400 rounded-lg rotate-12 animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-cyan-500 rounded-lg -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-600 rounded-lg rotate-45 animate-bounce"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Добро пожаловать
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Minecraft.mods
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto">
            Платформа для создания модов, хардвара, скинов и обучения строительству в Minecraft
          </p>
          
          <Button 
            size="lg" 
            onClick={() => setCurrentView('main')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Icon name="Rocket" className="mr-3" size={24} />
            Начать
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/60 border-slate-600/50 hover:bg-slate-700/60 transition-all duration-300 cursor-pointer transform hover:scale-105 backdrop-blur-sm"
              onClick={feature.action}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} className="text-white" size={32} />
                </div>
                <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-blue-200">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-blue-300 text-lg">
            Более 50,000 разработчиков уже создают удивительные проекты
          </p>
        </div>
      </div>
    </div>
  );
  
  const MainSite = () => (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-diamond/30 to-background">
      <nav className="bg-minecraft-dirt/20 backdrop-blur-sm border-b-4 border-minecraft-dirt sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-minecraft-grass rounded-sm"></div>
              <h1 className="text-2xl font-bold text-minecraft-dirt">Minecraft.mods</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              {['Главная', 'Создать мод', 'Создать хардвар', 'Создать скин', 'Обучение домам', 'Галерея', 'Сообщество'].map((item) => (
                <button
                  key={item}
                  className="px-4 py-2 rounded-md hover:bg-minecraft-grass/20 transition-colors text-minecraft-dirt font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setCurrentView('landing')}
                className="border-minecraft-dirt text-minecraft-dirt"
              >
                <Icon name="ArrowLeft" size={16} className="mr-1" />
                Назад
              </Button>
              <Button className="bg-minecraft-grass hover:bg-minecraft-emerald text-white">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block p-4 bg-minecraft-grass/20 rounded-lg mb-6">
              <Icon name="Blocks" size={64} className="text-minecraft-grass" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-minecraft-dirt">
              Создавай для
              <span className="block text-minecraft-grass">Minecraft</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Создавай моды, хардвар, скины и изучай строительство домов 
              с помощью наших инструментов и туториалов
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-minecraft-grass hover:bg-minecraft-emerald text-white px-8 py-4 text-lg">
              <Icon name="Play" className="mr-2" />
              Начать создание
            </Button>
            <Button size="lg" variant="outline" className="border-minecraft-dirt text-minecraft-dirt px-8 py-4 text-lg">
              <Icon name="BookOpen" className="mr-2" />
              Изучить туториалы
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-minecraft-stone/20 hover:border-minecraft-grass/40 transition-colors cursor-pointer" onClick={feature.action}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-minecraft-grass/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-minecraft-grass" />
                  </div>
                  <CardTitle className="text-minecraft-dirt">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-minecraft-dirt mb-4">Обучающие материалы</h2>
            <p className="text-xl text-muted-foreground">Пошаговые гайды по модингу, хардвару, скинам и строительству</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-minecraft-stone/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-minecraft-grass/20 rounded-lg flex items-center justify-center">
                      <Icon name={tutorial.icon as any} className="text-minecraft-grass" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="bg-minecraft-gold/20 text-minecraft-dirt">
                        {tutorial.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-minecraft-dirt">{tutorial.title}</CardTitle>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {tutorial.time}
                    </span>
                    <Button size="sm" className="bg-minecraft-grass hover:bg-minecraft-emerald text-white">
                      Начать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-minecraft-dirt mb-4">Готовые шаблоны</h2>
            <p className="text-xl text-muted-foreground">Скачивайте и адаптируйте под свои нужды</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-minecraft-stone/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-minecraft-grass/20 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={template.icon as any} className="text-minecraft-grass" />
                  </div>
                  <CardTitle className="text-minecraft-dirt text-lg">{template.title}</CardTitle>
                  <CardDescription className="text-sm">{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-minecraft-gold text-minecraft-dirt">
                      {template.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Download" size={14} />
                      {template.downloads}
                    </span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full border-minecraft-grass text-minecraft-grass hover:bg-minecraft-grass hover:text-white">
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Editor Preview */}
      <section className="py-16 px-4 bg-minecraft-dirt/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-minecraft-dirt mb-4">Визуальный редактор</h2>
            <p className="text-xl text-muted-foreground">Создавайте моды с помощью интуитивного интерфейса</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-minecraft-stone/20 overflow-hidden">
              <CardHeader className="bg-minecraft-dirt/10 border-b border-minecraft-stone/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-minecraft-redstone rounded-full"></div>
                  <div className="w-3 h-3 bg-minecraft-gold rounded-full"></div>
                  <div className="w-3 h-3 bg-minecraft-grass rounded-full"></div>
                  <span className="ml-4 text-sm font-mono text-minecraft-dirt">MyFirstMod.java</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-minecraft-stone/5 p-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div className="text-minecraft-emerald">public class <span className="text-minecraft-gold">MyFirstBlock</span> extends <span className="text-minecraft-gold">Block</span> {'{}'}</div>
                    <div className="ml-4 text-minecraft-dirt">
                      <div>public MyFirstBlock() {'{'}</div>
                      <div className="ml-4">super(Properties.create(Material.STONE));</div>
                      <div className="ml-4 text-minecraft-emerald">setRegistryName(<span className="text-minecraft-redstone">"my_first_block"</span>);</div>
                      <div>{'}'}</div>
                    </div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-minecraft-grass hover:bg-minecraft-emerald text-white">
                <Icon name="Code" className="mr-2" />
                Открыть редактор
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-minecraft-dirt mb-4">Присоединяйся к сообществу</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Более 50,000 разработчиков модов уже создают удивительные проекты
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-minecraft-grass mb-2">50k+</div>
              <div className="text-muted-foreground">Активных разработчиков</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-minecraft-gold mb-2">120k+</div>
              <div className="text-muted-foreground">Созданных модов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-minecraft-redstone mb-2">2M+</div>
              <div className="text-muted-foreground">Скачиваний</div>
            </div>
          </div>
          
          <Button size="lg" className="bg-minecraft-grass hover:bg-minecraft-emerald text-white">
            <Icon name="Users" className="mr-2" />
            Начать создавать
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-dirt/10 py-12 px-4 border-t-4 border-minecraft-dirt">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-minecraft-grass rounded-sm"></div>
                <h3 className="text-xl font-bold text-minecraft-dirt">Minecraft.mods</h3>
              </div>
              <p className="text-muted-foreground">
                Платформа для создания модов, хардвара, скинов и обучения строительству
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-minecraft-dirt mb-4">Обучение</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-minecraft-grass transition-colors">Туториалы</a></li>
                <li><a href="#" className="hover:text-minecraft-grass transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-minecraft-grass transition-colors">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-minecraft-dirt mb-4">Инструменты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-minecraft-grass transition-colors">Редактор</a></li>
                <li><a href="#" className="hover:text-minecraft-grass transition-colors">Шаблоны</a></li>
                <li><a href="#" className="hover:text-minecraft-grass transition-colors">Галерея</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-minecraft-dirt mb-4">Сообщество</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-minecraft-grass transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-minecraft-grass transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-minecraft-grass transition-colors">Reddit</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-minecraft-stone/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Minecraft.mods. Создано с ❤️ для сообщества моддеров
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
  
  if (currentView === 'landing') {
    return <LandingPage />;
  }
  
  return <MainSite />;
};

export default Index;